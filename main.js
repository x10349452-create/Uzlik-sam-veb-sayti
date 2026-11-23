/**
 * O'ZLIK SAM ACADEMY - MAIN JAVASCRIPT CONTROLLER
 * All interactive features, data rendering, dynamic filtering, modal dialogs,
 * animations, validation, and lead management.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStats();
  initCourses();
  initMentors();
  initTestimonials();
  initFAQ();
  initModals();
  initForm();
  initMobileDrawer();
  initScrollEffects();
  initFloatingWidgets();
  initCountdownTimer();
  initSocialProofToast();
});

/* --------------------------------------------------------------------------
   1. Render Live Stats & Animated Counters
   -------------------------------------------------------------------------- */
function initStats() {
  const container = document.getElementById('statsContainer');
  if (!container || typeof STATS_DATA === 'undefined') return;

  container.innerHTML = STATS_DATA.map(stat => `
    <div class="stat-item">
      <div class="stat-icon">
        <i class="fa-solid ${stat.icon}"></i>
      </div>
      <div class="stat-info">
        <div class="stat-number">
          <span class="counter" data-target="${stat.count}">0</span>${stat.suffix}
        </div>
        <div class="stat-label">${stat.label}</div>
      </div>
    </div>
  `).join('');

  // Animated Counter with IntersectionObserver
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.counter');
        counters.forEach(counter => {
          const target = +counter.getAttribute('data-target');
          const duration = 1800; // ms
          const step = Math.ceil(target / (duration / 20));
          let current = 0;

          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              counter.innerText = target.toLocaleString();
              clearInterval(timer);
            } else {
              counter.innerText = current.toLocaleString();
            }
          }, 20);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) counterObserver.observe(statsSection);
}

/* --------------------------------------------------------------------------
   2. Render & Filter Courses
   -------------------------------------------------------------------------- */
function initCourses() {
  const grid = document.getElementById('coursesGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || typeof COURSES_DATA === 'undefined') return;

  function renderCoursesList(filter = 'all') {
    const filtered = filter === 'all' 
      ? COURSES_DATA 
      : COURSES_DATA.filter(c => c.category === filter);

    grid.innerHTML = filtered.map(course => `
      <div class="course-card" data-category="${course.category}">
        <div class="course-card-top">
          <div class="course-icon-badge" style="background: ${course.color};">
            <i class="fa-solid ${course.icon}"></i>
          </div>
          <span class="course-badge-pill badge-${course.badgeColor}">${course.badge}</span>
        </div>

        <div class="course-card-body">
          <h3 class="course-title">${course.title}</h3>
          <div class="course-meta-tags">
            <span><i class="fa-regular fa-clock"></i> ${course.duration}</span>
            <span><i class="fa-solid fa-layer-group"></i> ${course.level}</span>
          </div>
          <p class="course-desc">${course.shortDesc}</p>
          <div class="course-tech-tags">
            ${course.technologies.slice(0, 4).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            ${course.technologies.length > 4 ? `<span class="tech-tag">+${course.technologies.length - 4}</span>` : ''}
          </div>
        </div>

        <div class="course-card-footer">
          <div class="course-price-wrap">
            <span class="price-sub">Oylik to'lov:</span>
            <span class="course-price">${course.priceMonthly.split('/')[0]}</span>
          </div>
          <div class="course-btn-group">
            <button class="btn btn-secondary btn-sm open-course-modal" data-id="${course.id}">
              <i class="fa-solid fa-circle-info"></i> Batafsil
            </button>
            <button class="btn btn-primary btn-sm quick-enroll-btn" data-title="${course.title}">
              Yozilish
            </button>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click events
    grid.querySelectorAll('.open-course-modal').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        openCourseDetail(id);
      });
    });

    grid.querySelectorAll('.quick-enroll-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        quickEnroll(title);
      });
    });
  }

  // Initial render
  renderCoursesList('all');

  // Filter Buttons event
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filterValue = btn.getAttribute('data-filter');
      renderCoursesList(filterValue);
    });
  });
}

/* --------------------------------------------------------------------------
   3. Render Mentors / Teachers
   -------------------------------------------------------------------------- */
function initMentors() {
  const grid = document.getElementById('mentorsGrid');
  if (!grid || typeof MENTORS_DATA === 'undefined') return;

  grid.innerHTML = MENTORS_DATA.map(m => `
    <div class="mentor-card">
      <div class="mentor-avatar-wrap">
        <img src="${m.avatar}" alt="${m.name}" class="mentor-avatar" loading="lazy">
        <span class="mentor-exp-badge"><i class="fa-solid fa-briefcase"></i> ${m.experience}</span>
      </div>
      <div class="mentor-info-body">
        <h3 class="mentor-name">${m.name}</h3>
        <span class="mentor-role">${m.role}</span>
        <span class="mentor-company">${m.company}</span>
        <p class="mentor-bio">${m.bio}</p>
        <div class="mentor-skills">
          ${m.skills.map(s => `<span class="mentor-skill-tag">${s}</span>`).join('')}
        </div>
        <div class="mentor-socials">
          ${m.social.telegram ? `<a href="${m.social.telegram}" target="_blank" class="mentor-social-btn" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>` : ''}
          ${m.social.linkedin ? `<a href="${m.social.linkedin}" target="_blank" class="mentor-social-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>` : ''}
          ${m.social.github ? `<a href="${m.social.github}" target="_blank" class="mentor-social-btn" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>` : ''}
          ${m.social.instagram ? `<a href="${m.social.instagram}" target="_blank" class="mentor-social-btn" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>` : ''}
          ${m.social.behance ? `<a href="${m.social.behance}" target="_blank" class="mentor-social-btn" aria-label="Behance"><i class="fa-brands fa-behance"></i></a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Render Testimonials
   -------------------------------------------------------------------------- */
function initTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid || typeof TESTIMONIALS_DATA === 'undefined') return;

  grid.innerHTML = TESTIMONIALS_DATA.map(t => `
    <div class="testimonial-card">
      <div>
        <div class="testimonial-stars">
          ${Array(t.rating).fill('<i class="fa-solid fa-star"></i>').join('')}
        </div>
        <p class="testimonial-text">${t.text}</p>
      </div>
      <div class="testimonial-author">
        <img src="${t.avatar}" alt="${t.name}" class="author-avatar" loading="lazy">
        <div class="author-details">
          <h5>${t.name}</h5>
          <span>${t.role}</span>
          <span class="author-course">${t.course}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* --------------------------------------------------------------------------
   5. Render & Toggle FAQ Accordion
   -------------------------------------------------------------------------- */
function initFAQ() {
  const container = document.getElementById('faqAccordion');
  if (!container || typeof FAQS_DATA === 'undefined') return;

  container.innerHTML = FAQS_DATA.map((faq, index) => `
    <div class="faq-item ${index === 0 ? 'active' : ''}">
      <button class="faq-question" type="button">
        <span>${faq.question}</span>
        <div class="faq-toggle-icon"><i class="fa-solid fa-plus"></i></div>
      </button>
      <div class="faq-answer">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close other items
      container.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   6. Course Detail Modal & Success Modal Logic
   -------------------------------------------------------------------------- */
let activeModalCourse = null;

function initModals() {
  const courseModal = document.getElementById('courseModalBackdrop');
  const courseCloseBtn = document.getElementById('modalCloseBtn');
  const modalEnrollBtn = document.getElementById('modalEnrollBtn');

  const successModal = document.getElementById('successModalBackdrop');
  const successCloseBtn = document.getElementById('successCloseBtn');

  // Close when clicking close buttons
  if (courseCloseBtn && courseModal) {
    courseCloseBtn.addEventListener('click', () => {
      courseModal.classList.remove('active');
    });
  }

  if (successCloseBtn && successModal) {
    successCloseBtn.addEventListener('click', () => {
      successModal.classList.remove('active');
    });
  }

  // Close when clicking outside modal dialog
  window.addEventListener('click', (e) => {
    if (e.target === courseModal) courseModal.classList.remove('active');
    if (e.target === successModal) successModal.classList.remove('active');
  });

  // Close on ESC key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (courseModal) courseModal.classList.remove('active');
      if (successModal) successModal.classList.remove('active');
    }
  });

  // Action from inside course modal
  if (modalEnrollBtn && courseModal) {
    modalEnrollBtn.addEventListener('click', () => {
      if (activeModalCourse) {
        courseModal.classList.remove('active');
        quickEnroll(activeModalCourse.title);
      }
    });
  }
}

function openCourseDetail(courseId) {
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return;

  activeModalCourse = course;
  const modal = document.getElementById('courseModalBackdrop');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const modalBody = document.getElementById('modalBody');

  modalBadge.innerText = course.level;
  modalTitle.innerText = course.title;
  modalPrice.innerText = course.priceMonthly;

  // Find mentor
  const mentor = typeof MENTORS_DATA !== 'undefined' 
    ? MENTORS_DATA.find(m => m.id === course.mentorId) 
    : null;

  modalBody.innerHTML = `
    <div class="modal-section">
      <p style="font-size: 1.05rem; color: var(--gray-700); margin-bottom: 16px;">
        ${course.shortDesc}
      </p>
      <div style="display: flex; gap: 20px; flex-wrap: wrap; background: #f1f5f9; padding: 12px 18px; border-radius: 8px; font-size: 0.88rem; margin-bottom: 20px;">
        <span><i class="fa-regular fa-calendar-check" style="color: var(--primary);"></i> <strong>Davomiyligi:</strong> ${course.duration}</span>
        <span><i class="fa-solid fa-users" style="color: var(--primary);"></i> <strong>Dars jadvali:</strong> ${course.lessonsPerWeek}</span>
        <span><i class="fa-solid fa-fire" style="color: #ef4444;"></i> <strong>Qolgan joylar:</strong> ${course.seatsLeft} ta</span>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title"><i class="fa-solid fa-circle-check"></i> Kurs davomida nimalarni o'rganasiz:</h4>
      <div class="modal-learn-list">
        ${course.whatYouLearn.map(item => `
          <div class="learn-item">
            <i class="fa-solid fa-check"></i>
            <span>${item}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title"><i class="fa-solid fa-list-ol"></i> Oylik O'quv Dasturi (Syllabus):</h4>
      <div class="modal-syllabus-list">
        ${course.syllabus.map(s => `
          <div class="syllabus-row">
            <span class="s-month">${s.month}</span>
            <div class="s-content">
              <strong>${s.title}</strong>
              <p>${s.details}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title"><i class="fa-solid fa-laptop-code"></i> O'rganiladigan Asosiy Texnologiyalar:</h4>
      <div class="course-tech-tags">
        ${course.technologies.map(t => `<span class="tech-tag" style="padding: 6px 12px; font-size: 0.85rem;">${t}</span>`).join('')}
      </div>
    </div>

    ${mentor ? `
      <div class="modal-section" style="background: #f8fafc; border: 1px solid var(--gray-200); border-radius: 12px; padding: 16px; display: flex; align-items: center; gap: 16px;">
        <img src="${mentor.avatar}" alt="${mentor.name}" style="width: 54px; height: 54px; border-radius: 50%; object-fit: cover; border: 2px solid var(--primary);">
        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--primary); font-weight: 700;">Asosiy Kurs Mentori</span>
          <h5 style="font-size: 1.05rem; margin: 2px 0;">${mentor.name}</h5>
          <span style="font-size: 0.825rem; color: var(--gray-600);">${mentor.role} (${mentor.experience})</span>
        </div>
      </div>
    ` : ''}
  `;

  modal.classList.add('active');
}

function quickEnroll(courseTitle) {
  const courseSelect = document.getElementById('courseSelect');
  const registerSection = document.getElementById('register');
  const nameInput = document.getElementById('fullName');

  if (courseSelect && courseTitle) {
    let matched = false;
    for (let option of courseSelect.options) {
      if (option.text.toLowerCase().includes(courseTitle.toLowerCase()) || 
          courseTitle.toLowerCase().includes(option.value.toLowerCase())) {
        option.selected = true;
        matched = true;
        break;
      }
    }
    if (!matched) {
      courseSelect.value = courseTitle;
    }
  }

  if (registerSection) {
    registerSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      if (nameInput) nameInput.focus();
    }, 600);
  }
}

/* --------------------------------------------------------------------------
   7. Registration Form Validation & Lead Management
   -------------------------------------------------------------------------- */
function initForm() {
  const form = document.getElementById('enrollForm');
  const phoneInput = document.getElementById('phoneInput');
  const nameInput = document.getElementById('fullName');
  const courseSelect = document.getElementById('courseSelect');
  const submitBtn = document.getElementById('submitBtn');

  const nameError = document.getElementById('nameError');
  const phoneError = document.getElementById('phoneError');
  const courseError = document.getElementById('courseError');

  const successModal = document.getElementById('successModalBackdrop');
  const successCourseName = document.getElementById('successCourseName');
  const successPhone = document.getElementById('successPhone');

  if (!form || !phoneInput) return;

  // Uzbekistan Phone Input Mask: +998 (__) ___-__-__
  phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // strip non-digits

    // Ensure it starts with 998
    if (!value.startsWith('998')) {
      value = '998' + value;
    }

    // Limit to 12 digits (998 + 9 digits)
    value = value.substring(0, 12);

    // Format: +998 (XX) XXX-XX-XX
    let formatted = '+998';
    if (value.length > 3) {
      formatted += ' (' + value.substring(3, 5);
    }
    if (value.length >= 5) {
      formatted += ') ' + value.substring(5, 8);
    }
    if (value.length >= 8) {
      formatted += '-' + value.substring(8, 10);
    }
    if (value.length >= 10) {
      formatted += '-' + value.substring(10, 12);
    }

    e.target.value = formatted;
  });

  // Handle backspace properly
  phoneInput.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && phoneInput.value.length <= 6) {
      e.preventDefault();
      phoneInput.value = '+998 ';
    }
  });

  // Form Submit Handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Name
    const nameVal = nameInput.value.trim();
    if (nameVal.length < 3) {
      nameInput.classList.add('is-invalid');
      nameError.classList.add('show');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
      nameError.classList.remove('show');
    }

    // Validate Phone (+998 (90) 123-45-67 is 19 chars long)
    const phoneDigits = phoneInput.value.replace(/\D/g, '');
    if (phoneDigits.length !== 12) {
      phoneInput.classList.add('is-invalid');
      phoneError.classList.add('show');
      isValid = false;
    } else {
      phoneInput.classList.remove('is-invalid');
      phoneError.classList.remove('show');
    }

    // Validate Course
    if (!courseSelect.value) {
      courseSelect.classList.add('is-invalid');
      courseError.classList.add('show');
      isValid = false;
    } else {
      courseSelect.classList.remove('is-invalid');
      courseError.classList.remove('show');
    }

    if (!isValid) return;

    // Prepare Lead Data
    const leadData = {
      id: Date.now(),
      name: nameVal,
      phone: phoneInput.value,
      course: courseSelect.value,
      time: document.getElementById('timePreference')?.value || 'Kechki',
      format: document.getElementById('studyFormat')?.value || 'Markazda',
      date: new Date().toLocaleString('uz-UZ')
    };

    // Show Loading State
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    btnText.classList.add('d-none');
    btnLoading.classList.remove('d-none');
    submitBtn.disabled = true;

    // Simulate Network Request & Store to LocalStorage
    setTimeout(() => {
      try {
        const savedLeads = JSON.parse(localStorage.getItem('ozlik_sam_leads') || '[]');
        savedLeads.push(leadData);
        localStorage.setItem('ozlik_sam_leads', JSON.stringify(savedLeads));
        console.log('✅ Yangi ariza saqlandi:', leadData);
      } catch (err) {
        console.warn('LocalStorage error:', err);
      }

      // Optional Telegram Bot webhook template:
      // sendLeadToTelegram(leadData);

      // Reset Button State
      btnText.classList.remove('d-none');
      btnLoading.classList.add('d-none');
      submitBtn.disabled = false;

      // Populate & Open Success Modal
      if (successCourseName) successCourseName.innerText = leadData.course;
      if (successPhone) successPhone.innerText = leadData.phone;
      if (successModal) successModal.classList.add('active');

      // Reset Form
      form.reset();
      phoneInput.value = '+998 ';
    }, 900);
  });
}

/**
 * Telegram Botga to'g'ridan-to'g'ri ariza jo'natish funksiyasi.
 * Sayt egasi o'z bot tokeni va chat ID sini kiritishi mumkin.
 */
function sendLeadToTelegram(lead) {
  const BOT_TOKEN = "SIZNING_BOT_TOKENINGIZ";
  const CHAT_ID = "SIZNING_CHAT_IDINGIZ";

  if (BOT_TOKEN === "SIZNING_BOT_TOKENINGIZ") return;

  const text = `🔥 YANGI ARIZA (O'zlik SAM saytidan)!\n\n` +
               `👤 Ism: ${lead.name}\n` +
               `📞 Telefon: ${lead.phone}\n` +
               `📚 Kurs: ${lead.course}\n` +
               `⏰ Qulay vaqt: ${lead.time}\n` +
               `🏫 Ta'lim shakli: ${lead.format}\n` +
               `📅 Sana: ${lead.date}`;

  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: CHAT_ID, text: text })
  }).catch(err => console.error('Telegramga yuborishda xato:', err));
}

/* --------------------------------------------------------------------------
   8. Mobile Drawer Navigation
   -------------------------------------------------------------------------- */
function initMobileDrawer() {
  const toggleBtn = document.getElementById('mobileToggle');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const closeBtn = document.getElementById('drawerClose');
  const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta');

  if (!toggleBtn || !drawer || !overlay) return;

  function openDrawer() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* --------------------------------------------------------------------------
   9. Scroll Effects (Navbar, Active Link Spy, Scroll-to-Top)
   -------------------------------------------------------------------------- */
function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar shadow
    if (navbar) {
      if (scrollPos > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Scroll to Top Button Visibility
    if (scrollTopBtn) {
      if (scrollPos > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }

    // ScrollSpy active link
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

/* --------------------------------------------------------------------------
   10. Floating Quick Contact Widget
   -------------------------------------------------------------------------- */
function initFloatingWidgets() {
  const contactBtn = document.getElementById('contactToggleBtn');
  const popover = document.getElementById('contactPopover');

  if (!contactBtn || !popover) return;

  contactBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    popover.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!popover.contains(e.target) && e.target !== contactBtn) {
      popover.classList.remove('active');
    }
  });
}

/* --------------------------------------------------------------------------
   11. Limited Time Offer Countdown Timer
   -------------------------------------------------------------------------- */
function initCountdownTimer() {
  const daysEl = document.getElementById('daysNum');
  const hoursEl = document.getElementById('hoursNum');
  const minsEl = document.getElementById('minsNum');
  const secsEl = document.getElementById('secsNum');

  if (!daysEl || !hoursEl || !minsEl || !secsEl) return;

  // Set target date 4 days from now
  const now = new Date();
  const targetDate = new Date(now.getTime() + (4 * 24 * 60 * 60 * 1000) + (16 * 60 * 60 * 1000));

  function updateTimer() {
    const current = new Date();
    const diff = targetDate - current;

    if (diff <= 0) {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minsEl.innerText = "00";
      secsEl.innerText = "00";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.innerText = d < 10 ? '0' + d : d;
    hoursEl.innerText = h < 10 ? '0' + h : h;
    minsEl.innerText = m < 10 ? '0' + m : m;
    secsEl.innerText = s < 10 ? '0' + s : s;
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* --------------------------------------------------------------------------
   12. Live Social Proof Toast Notification
   -------------------------------------------------------------------------- */
function initSocialProofToast() {
  const toast = document.getElementById('socialProofToast');
  const toastName = document.getElementById('toastName');
  const toastAction = document.getElementById('toastAction');
  const toastTime = document.getElementById('toastTime');
  const toastClose = document.getElementById('toastClose');

  if (!toast || typeof LIVE_NOTIFICATIONS === 'undefined' || LIVE_NOTIFICATIONS.length === 0) return;

  let currentIndex = 0;

  function showNextNotification() {
    const item = LIVE_NOTIFICATIONS[currentIndex];
    toastName.innerText = item.name;
    toastAction.innerText = item.action;
    toastTime.innerText = item.time;

    toast.classList.add('show');

    // Auto hide after 5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);

    currentIndex = (currentIndex + 1) % LIVE_NOTIFICATIONS.length;
  }

  // Initial trigger after 3.5 seconds
  setTimeout(() => {
    showNextNotification();
    // Subsequent triggers every 14 seconds
    setInterval(showNextNotification, 14000);
  }, 3500);

  if (toastClose) {
    toastClose.addEventListener('click', () => {
      toast.classList.remove('show');
    });
  }
}
