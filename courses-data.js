/**
 * O'ZLIK SAM O'quv Markazi - Kurslar va Mentorlar Ma'lumotlar Bazasi
 * Barcha ma'lumotlar strukturalangan bo'lib, oson yangilanadi va kengaytiriladi.
 */

const COURSES_DATA = [
  {
    id: "frontend",
    title: "Frontend Veb Dasturlash",
    category: "it",
    badge: "Eng ommabop",
    badgeColor: "primary",
    duration: "6 oy",
    lessonsPerWeek: "Haftada 3 kun, 2 soatdan + Coworking",
    level: "Boshlang'ichdan Junior+ gacha",
    shortDesc: "Zamonaviy veb-saytlar va murakkab veb-ilovalarni noldan professional darajada yaratishni o'rganing.",
    priceMonthly: "700,000 so'm / oy",
    priceFull: "3,800,000 so'm (to'liq to'lovga 10% chegirma)",
    icon: "fa-code",
    color: "#3b82f6",
    technologies: ["HTML5", "CSS3 / Sass", "JavaScript ES6+", "React.js", "Tailwind CSS", "Git & GitHub", "REST API", "Vite / Next.js"],
    whatYouLearn: [
      "Saytlar maketini to'liq mustaqil, moslashuvchan (responsive) qilib terish",
      "JavaScript yordamida interaktiv, dinamik funksiyalar va algoritmlarni yozish",
      "React.js zamonaviy kutubxonasida Single Page Application (SPA) ilovalar yaratish",
      "Server bilan REST API orqali ma'lumot almashish va xatoliklarni boshqarish",
      "Git tizimida jamoaviy ishlash va portfolioda 5+ ta real amaliy loyihaga ega bo'lish"
    ],
    syllabus: [
      { month: "1-oy", title: "HTML5, CSS3 va Zamonaviy Veb Asoslari", details: "Semantik teglar, Flexbox, CSS Grid, Moslashuvchan dizayn, Emmet va VS Code sirlari." },
      { month: "2-oy", title: "Murakkab CSS, Sass va Animatsiyalar", details: "CSS preprocessorlar, BEM metodologiyasi, Tailwind CSS utility-first freymvorki, UI loyihalar." },
      { month: "3-oy", title: "JavaScript Asoslari va DOM Manipulation", details: "O'zgaruvchilar, funksiyalar, massivlar, obyektlar, hodisalar (Events), DOM bilan ishlash." },
      { month: "4-oy", title: "Chuqurlashtirilgan JS va Asinxron Dasturlash", details: "ES6+ yangiliklari, Promises, Async/Await, Fetch API, RESTful arxitektura, JSON." },
      { month: "5-oy", title: "React.js Zamonaviy Freymvorki", details: "Komponentlar, Props, State, React Hooks (useState, useEffect, useContext), Router, Redux Toolkit." },
      { month: "6-oy", title: "Amaliy Diplom Loyihasi va Karyera Markazi", details: "To'liq funksional E-commerce do'kon yaratish, portfolio tayyorlash, suhbatga (interview) tayyorgarlik." }
    ],
    mentorId: "sherzod_aliyev",
    seatsLeft: 4
  },
  {
    id: "backend",
    title: "Python & Django Backend",
    category: "it",
    badge: "Yuqori talab",
    badgeColor: "success",
    duration: "7 oy",
    lessonsPerWeek: "Haftada 3 kun, 2 soatdan",
    level: "Noldan kuchli Junior gacha",
    shortDesc: "Kuchli backend tizimlar, ma'lumotlar bazalari, xavfsiz REST API va Telegram botlar yaratish kursi.",
    priceMonthly: "750,000 so'm / oy",
    priceFull: "4,500,000 so'm (chegirma bilan)",
    icon: "fa-server",
    color: "#10b981",
    technologies: ["Python", "OOP", "PostgreSQL", "Django", "Django REST Framework", "Docker", "Redis", "Telegram Bot (Aiogram)"],
    whatYouLearn: [
      "Python tili sintaksisi, algoritmlar va Ma'lumotlar Tuzilmalari (Data Structures)",
      "Obyektga Yo'naltirilgan Dasturlash (OOP) tamoyillarini chuqur o'zlashtirish",
      "PostgreSQL bilan relyatsion ma'lumotlar bazalarini loyihalash va optimallashtirish",
      "Django va DRF orqali xavfsiz, tezkor va yuklamaga bardoshli API lar ishlab chiqish",
      "Aiogram orqali to'lov tizimlariga ulangan murakkab Telegram botlar yaratish"
    ],
    syllabus: [
      { month: "1-oy", title: "Python Sintaksisi va Mantiqiy Masalalar", details: "O'zgaruvchilar, shartlar, sikllar, funksiyalar, LeetCode boshlang'ich masalalari." },
      { month: "2-oy", title: "OOP va Ilg'or Python", details: "Klasslar, merosxo'rlik, polimorfizm, inkapsulyatsiya, modullar va paketlar." },
      { month: "3-oy", title: "Ma'lumotlar Bazasi va SQL (PostgreSQL)", details: "SQL so'rovlari, indekslar, munosabatlar (1:1, 1:N, M:N), ORM tushunchasi." },
      { month: "4-oy", title: "Django Veb Freymvorki", details: "MVT arxitekturasi, admin panel, shakllar, foydalanuvchilar autentifikatsiyasi." },
      { month: "5-oy", title: "Django REST Framework (DRF)", details: "Serializers, ViewSets, JWT tokenlar orqali avtorizatsiya, Swagger hujjatlashtirish." },
      { month: "6-oy", title: "Telegram Botlar va Integratsiyalar", details: "Aiogram 3.x, FSM holatlari, Click va Payme to'lov tizimlarini ulash." },
      { month: "7-oy", title: "Deployment, Docker va Diplom Loyihasi", details: "Linux serverlar, Docker konteynerlashtirish, Nginx, Gunicorn, jonli serverga joylash." }
    ],
    mentorId: "bobur_usmonov",
    seatsLeft: 3
  },
  {
    id: "design",
    title: "UI/UX & Grafik Dizayn",
    category: "design",
    badge: "Trenddagi kasb",
    badgeColor: "warning",
    duration: "4 oy",
    lessonsPerWeek: "Haftada 3 kun, 2 soatdan",
    level: "Noldan amaliyotgacha",
    shortDesc: "Veb-saytlar va mobil ilovalar uchun jozibali interfeyslar, brending hamda reklama dizaynlarini yarating.",
    priceMonthly: "650,000 so'm / oy",
    priceFull: "2,340,000 so'm (chegirma bilan)",
    icon: "fa-paint-brush",
    color: "#f59e0b",
    technologies: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Wireframing", "Prototyping", "Design System", "Behance"],
    whatYouLearn: [
      "Figma da to'liq veb va mobil ilovalar dizaynini professional loyihalash",
      "Foydalanuvchi tajribasi (UX tadqiqotlar), persona va CJM xaritalarini tuzish",
      "Ranglar psixologiyasi, zamonaviy tipografiya va kompozitsiya qoidalari",
      "Adobe Photoshop va Illustrator da professional fotomontaj va vektor logotiplar chizish",
      "Behance va Dribbble da portfolio to'plash va mijozlar bilan ishlash ko'nikmasi"
    ],
    syllabus: [
      { month: "1-oy", title: "Grafik Dizayn Asoslari va Photoshop", details: "Kompozitsiya, ranglar nazariyasi, tipografiya, fotomontaj, reklama bannerlari." },
      { month: "2-oy", title: "Adobe Illustrator va Vektor Grafika", details: "Logotip yaratish, brendbuk elementlari, vektor illyustratsiyalar, poligrafiya." },
      { month: "3-oy", title: "Figma va UI Dizayn Asoslari", details: "Auto-layout, Components, Variants, Responsive grid, mobil va veb maketlar." },
      { month: "4-oy", title: "UX Tadqiqotlar, Prototip va Portfolio", details: "Foydalanuvchi yo'li, interaktiv prototiplar, Behance keyslarini joylash." }
    ],
    mentorId: "malika_karimova",
    seatsLeft: 5
  },
  {
    id: "ielts",
    title: "Intensive IELTS (0 dan 7.5+)",
    category: "languages",
    badge: "Natija kafolati",
    badgeColor: "danger",
    duration: "5 oy",
    lessonsPerWeek: "Haftada 3 kun, 2 soatdan + Mock imtihonlar",
    level: "Intermediate dan boshlab",
    shortDesc: "Xalqaro oliy o'quv yurtlari va chet el grantlari uchun nufuzli IELTS sertifikatini yuqori ball bilan qo'lga kiriting.",
    priceMonthly: "600,000 so'm / oy",
    priceFull: "2,700,000 so'm",
    icon: "fa-graduation-cap",
    color: "#ef4444",
    technologies: ["IELTS Academic / General", "Speaking Club", "Weekly Mock Tests", "Native Speaker Sessions", "Essay Correction"],
    whatYouLearn: [
      "IELTS Listening va Reading bo'limlarining barcha savol turlari strategiyalari",
      "IELTS Writing Task 1 va Task 2 uchun 7.0+ darajadagi akademik insholar yozish",
      "IELTS Speaking da ravon, ishonchli va grammatik to'g'ri fikr bayon qilish",
      "Har haftalik real imtihon muhitidagi Mock imtihonlar orqali vaqtni to'g'ri taqsimlash",
      "Grammatik xatolarni bartaraf qilish va akademik lug'at boyligini 3000+ so'zga oshirish"
    ],
    syllabus: [
      { month: "1-oy", title: "IELTS Strategiyalari va Akademik Baza", details: "Format bilan tanishish, Reading skimmer/scanning, Listening keyword usullari." },
      { month: "2-oy", title: "Writing Task 1 va Speaking Part 1-2", details: "Grafik, jadval va xaritalarni tasvirlash, ravon nutq mashqlari." },
      { month: "3-oy", title: "Writing Task 2 (Opinion, Discussion, Problem-Solution)", details: "Akademik insho strukturasi, argumentlarni rivojlantirish." },
      { month: "4-oy", title: "Speaking Part 3 va Murakkab Lug'at", details: "Mantiqiy bahs-munozara, idiomalar, kollokatsiyalar, tabiiy talaffuz." },
      { month: "5-oy", title: "Intensiv Mock Imtihonlar va Xatolar ustida ishlash", details: "To'liq 3 soatlik mock sinovlar, individual fidbek va tahlil." }
    ],
    mentorId: "nodira_rahimova",
    seatsLeft: 6
  },
  {
    id: "russian",
    title: "Rus Tili (So'zlashuv & Amaliyot)",
    category: "languages",
    badge: "Tezkor natija",
    badgeColor: "info",
    duration: "3 oy",
    lessonsPerWeek: "Haftada 3 kun, 1.5 soatdan",
    level: "Noldan erkin so'zlashuvgacha",
    shortDesc: "Ish, ta'lim va biznesda rus tilida to'siqsiz, erkin va grammatik to'g'ri so'zlashish ko'nikmasini shakllantiring.",
    priceMonthly: "450,000 so'm / oy",
    priceFull: "1,200,000 so'm",
    icon: "fa-comments",
    color: "#06b6d4",
    technologies: ["Jonli so'zlashuv", "Video tahlillar", "Amaliy grammatika", "Lug'at boyligi", "Rus madaniyati"],
    whatYouLearn: [
      "Rus tilida gapirishdagi psixologik to'siqni yengish va erkin suhbatlashish",
      "Kundalik hayot, do'kon, bank, aeroport va ish suhbatlaridagi asosiy iboralar",
      "Murakkab grammatik qoidalarni sodda va amaliy mashg'ulotlar orqali o'zlashtirish",
      "To'g'ri urg'u va chiroyli talaffuz bilan gapirish"
    ],
    syllabus: [
      { month: "1-oy", title: "Boshlang'ich So'zlashuv va Bazaviy Grammatika", details: "O'zini tanishtirish, oila, kasb, fe'l tuslanishi va kundalik dialoglar." },
      { month: "2-oy", title: "Kengaytirilgan Mavzular va Audio Eshitish", details: "Shahar bo'ylab sayohat, ish joyidagi muloqot, o'tgan va kelasi zamonlar." },
      { month: "3-oy", title: "Erkin Muloqot va Ish Yuzasidan Suhbatlar", details: "Biznes yozishmalar, telefon qo'ng'iroqlari, intervyu savollariga javob berish." }
    ],
    mentorId: "nodira_rahimova",
    seatsLeft: 8
  },
  {
    id: "smm",
    title: "SMM & Raqamli Marketing",
    category: "business",
    badge: "Daromadli soha",
    badgeColor: "success",
    duration: "3 oy",
    lessonsPerWeek: "Haftada 3 kun, 2 soatdan",
    level: "Boshlang'ichdan amaliyotchi mutaxassisgacha",
    shortDesc: "Instagram, Telegram va TikTok da sahifalarni professional yurgizish, target reklama va sotuvlarni oshirish sirlari.",
    priceMonthly: "600,000 so'm / oy",
    priceFull: "1,600,000 so'm",
    icon: "fa-bullhorn",
    color: "#8b5cf6",
    technologies: ["Facebook Ads Manager", "Target reklama", "Kopirayting", "Mobilografiya", "Reels/TikTok strategiya", "Kanal monetizatsiyasi"],
    whatYouLearn: [
      "Target reklamani professional darajada yoqish va minimal byudjet bilan mijoz jalb qilish",
      "Sotuvchi matnlar (kopirayting) va vizual kontent-reja tuzish",
      "Smartfonda professional rasm va videolarni tasvirga olish (Mobilografiya, CapCut)",
      "Mijozlar bilan shartnoma tuzish va oylik 500$+ daromadli loyihalarni olish"
    ],
    syllabus: [
      { month: "1-oy", title: "SMM Asoslari va Kontent Strategiya", details: "Auditoriyani tahlil qilish, raqobatchilar tahlili, kontent-reja va vizual uslub." },
      { month: "2-oy", title: "Mobilografiya va Sotuvchi Matnlar", details: "CapCut da montaj, Reels ssenariylari, AIDA va PAS modellari bo'yicha kopirayting." },
      { month: "3-oy", title: "Target Reklama (Meta Ads) va Mijoz topish", details: "Ads Manager sozlash, piksellar, A/B testlar, mijozlar topish va brif olish." }
    ],
    mentorId: "azizbek_xoliqov",
    seatsLeft: 5
  },
  {
    id: "accounting",
    title: "Buxgalteriya 1C va Amaliy Soliqlar",
    category: "business",
    badge: "100% amaliy",
    badgeColor: "primary",
    duration: "4 oy",
    lessonsPerWeek: "Haftada 3 kun, 2 soatdan",
    level: "Noldan Bosh Buxgaltergacha",
    shortDesc: "Korxona hisob-kitoblarini yuritish, 1C 8.3 dasturida ishlash, soliq hisobotlari va Didox elektron hisobvaraq-fakturalar.",
    priceMonthly: "650,000 so'm / oy",
    priceFull: "2,300,000 so'm",
    icon: "fa-calculator",
    color: "#0284c7",
    technologies: ["1C: Korxona 8.3", "Soliq.uz", "Didox.uz", "Mehnat.uz", "Excel Buxgalteriya", "Soliq kodeksi"],
    whatYouLearn: [
      "1C: Korxona 8.3 dasturida barcha amaliyotlarni to'liq mustaqil bajarish",
      "Ish haqi, ta'tillar, kasallik varaqalari va soliqlarni to'g'ri hisoblash",
      "Bank-klient, kassa amaliyotlari va tovar-moddiy boyliklar harakatini yuritish",
      "Oylik, choraklik va yillik soliq hisobotlarini tayyorlash va jo'natish"
    ],
    syllabus: [
      { month: "1-oy", title: "Buxgalteriya Hisobi Asoslari va Qonunchilik", details: "Hisoblar rejasi, ikkiyoqlama yozuv, balans tuzilmasi, birlamchi hujjatlar." },
      { month: "2-oy", title: "1C: Korxona 8.3 da Boshlang'ich Amaliyotlar", details: "Kassa, hisob-kitob hisobraqami, kontragentlar, tovar kirim va chiqimlari." },
      { month: "3-oy", title: "Ish haqi, Kadrlar va Soliqlar", details: "Xodimlar hisobi, JShODS, ijtimoiy soliq, mehnat ta'tili hisob-kitoblari." },
      { month: "4-oy", title: "Soliq Hisobotlari va Balansni Yopish", details: "QQS, aylanmadan olinadigan soliq, foyda solig'i, Didox va Soliq.uz bilan ishlash." }
    ],
    mentorId: "gulnoza_saidova",
    seatsLeft: 7
  },
  {
    id: "cybersecurity",
    title: "Kiberxavfsizlik & Tarmoq Asoslari",
    category: "it",
    badge: "Kelajak kasbi",
    badgeColor: "secondary",
    duration: "5 oy",
    lessonsPerWeek: "Haftada 3 kun, 2 soatdan",
    level: "O'rta daraja",
    shortDesc: "Kompaniya ma'lumotlarini xakerlik hujumlaridan himoya qilish, tarmoq xavfsizligi va axborot himoyasi asoslari.",
    priceMonthly: "700,000 so'm / oy",
    priceFull: "3,150,000 so'm",
    icon: "fa-shield-alt",
    color: "#6366f1",
    technologies: ["Linux Kali/Ubuntu", "Wireshark", "Cisco Packet Tracer", "Nmap", "Metasploit", "Kriptografiya"],
    whatYouLearn: [
      "Tarmoq protokollari (TCP/IP, DNS, DHCP, HTTP/HTTPS) ishlash mexanizmlari",
      "Linux operatsion tizimini xavfsizlik nuqtai nazaridan boshqarish va buyruqlar",
      "Zaifliklarni aniqlash (Vulnerability Assessment) va penetratsion testlar",
      "Korporativ tarmoq xavfsizligi devorlari (Firewall, IDS/IPS) sozlash"
    ],
    syllabus: [
      { month: "1-oy", title: "Kompyuter Tarmoqlari Asoslari", details: "OSI modeli, IPv4/IPv6 manzillash, router va switch konfiguratsiyasi." },
      { month: "2-oy", title: "Linux Tizimi va Terminal Bilan Ishlash", details: "Fayllar tizimi, ruxsatlar (permissions), bash skripting asoslari." },
      { month: "3-oy", title: "Tarmoq Xavfsizligi va Skannerlash", details: "Portlarni tekshirish (Nmap), paketlarni tahlil qilish (Wireshark)." },
      { month: "4-oy", title: "Veb Zaifliklar va OWASP Top 10", details: "SQL Injection, XSS, CSRF tushunchalari va ularni bartaraf etish." },
      { month: "5-oy", title: "Himoya choralari va Xavfsizlik Auditi", details: "Shifrlash algoritmlari, xavfsizlik siyosati, amaliy xavfsizlik loyihasi." }
    ],
    mentorId: "bobur_usmonov",
    seatsLeft: 4
  }
];

const MENTORS_DATA = [
  {
    id: "sherzod_aliyev",
    name: "Sherzod Aliyev",
    role: "Senior Full-Stack Dasturchi & IT Mentor",
    experience: "6+ yillik amaliy tajriba",
    company: "Sobiq EPAM Systems & IT Park rezidenti",
    bio: "30 dan ortiq yirik veb-tizimlar va elektron tijorat loyihalari me'mori. 350 dan ortiq shogirdlari bugungi kunda O'zbekiston va chet el kompaniyalarida faoliyat yuritmoqda.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",
    skills: ["JavaScript", "React.js", "Node.js", "TypeScript", "Next.js", "Clean Architecture"],
    social: {
      telegram: "https://t.me",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "bobur_usmonov",
    name: "Bobur Usmonov",
    role: "Lead Backend Developer & Kiberxavfsizlik Mutaxassisi",
    experience: "5+ yillik tajriba",
    company: "Fintech loyihalar yetakchi dasturchisi",
    bio: "Yuklamasi yuqori bo'lgan bank va to'lov tizimlari backend qismini yaratish bo'yicha ekspert. Python, xavfsizlik auditi va bulutli texnologiyalar ustasi.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
    skills: ["Python", "Django", "PostgreSQL", "Docker", "Cybersecurity", "Microservices"],
    social: {
      telegram: "https://t.me",
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "malika_karimova",
    name: "Malika Karimova",
    role: "Senior UI/UX Dizayner & Art Director",
    experience: "5+ yillik tajriba",
    company: "Xalqaro Dizayn Agentligi & Freelance Top-Rated",
    bio: "Figma, qulay foydalanuvchi interfeyslari (UX) va brend identikasi bo'yicha 100+ muvaffaqiyatli loyihalar muallifi. Behance da minglab e'tiroflarga sazovor bo'lgan.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
    skills: ["UI/UX Design", "Figma", "Design Systems", "Adobe CC", "User Research", "Mobile Apps"],
    social: {
      telegram: "https://t.me",
      linkedin: "https://linkedin.com",
      behance: "https://behance.net"
    }
  },
  {
    id: "nodira_rahimova",
    name: "Nodira Rahimova",
    role: "Senior English & IELTS Instruktor",
    experience: "7+ yillik pedagogik tajriba",
    company: "IELTS 8.5 ball | CELTA Xalqaro sertifikati",
    bio: "O'quvchilarining 80% dan ortig'i IELTS imtihonidan 7.0 va undan yuqori natija ko'rsatgan. Xalqaro universitetlarga kirish va insholar tahlili bo'yicha yetakchi mutaxassis.",
    avatar: "https://images.unsplash.com/photo-1580894732486-1d11e0f06536?auto=format&fit=crop&w=500&q=80",
    skills: ["IELTS Academic", "Advanced Speaking", "Academic Writing", "Methodology", "Public Speaking"],
    social: {
      telegram: "https://t.me",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "azizbek_xoliqov",
    name: "Azizbek Xoliqov",
    role: "Digital Marketing & Target Bo'yicha Mutaxassis",
    experience: "4+ yillik marketing tajribasi",
    company: "100+ brendlar reklama kampaniyasi rahbari",
    bio: "Meta Ads orqali 500,000$ dan ortiq reklama byudjetini samarali boshqargan. Kichik va o'rta bizneslarni noldan millionlik daromadlarga olib chiqish bo'yicha amaliyotchi ekspert.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    skills: ["Meta Ads", "Targeting", "Sales Funnels", "Copywriting", "Web Analytics", "ROI Optimization"],
    social: {
      telegram: "https://t.me",
      instagram: "https://instagram.com"
    }
  },
  {
    id: "gulnoza_saidova",
    name: "Gulnoza Saidova",
    role: "Bosh Buxgalter & Amaliy 1C Murabbiyi",
    experience: "10+ yillik amaliy bosh buxgalterlik staji",
    company: "Yirik ishlab chiqarish va savdo korxonalari bosh buxgalteri",
    bio: "O'zbekiston Respublikasining barcha soliq islohotlari va elektron hujjat aylanish tizimlari bo'yicha chuqur amaliy bilimga ega. 200 dan ortiq mutaxassislarni 1C da ishlashga o'rgatgan.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=500&q=80",
    skills: ["1C 8.3", "Soliq kodeksi", "Moliyaviy hisobot", "Audit", "Didox / Soliq.uz", "Excel Buxgalteriya"],
    social: {
      telegram: "https://t.me"
    }
  }
];

const STATS_DATA = [
  { count: 5200, suffix: "+", label: "Muvaffaqiyatli Bitiruvchilar", icon: "fa-user-graduate" },
  { count: 93, suffix: "%", label: "Ishga Joylashish Ko'rsatkichi", icon: "fa-briefcase" },
  { count: 16, suffix: "+", label: "Zamonaviy Yo'nalishlar", icon: "fa-laptop-code" },
  { count: 35, suffix: "+", label: "Tajribali Amaliyotchi Mentorlar", icon: "fa-chalkboard-teacher" }
];

const TESTIMONIALS_DATA = [
  {
    name: "Javohir Toshpo'latov",
    role: "Frontend Dasturchi (EPAM)",
    course: "Frontend Veb Dasturlash bitiruvchisi",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "\"O'zlik SAM o'quv markaziga kelishdan oldin dasturlash bo'yicha hech qanday tushuncham yo'q edi. Mentorlarimiz har bir mavzuni amaliy loyihalar orqali tushuntirishdi. Kurs oxirida 4 ta mustaqil loyiha bilan rezyume tuzdik va birinchi oydayoq ishga taklif oldim! Rahmat O'zlik SAM!\""
  },
  {
    name: "Nilufar Oripova",
    role: "IELTS 7.5 sohibasi (SamDTU talabasi)",
    course: "Intensive IELTS kursi bitiruvchisi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "\"Nodira opaning intensiv darslari va har haftalik real mock imtihonlari sababli qo'rquvim butunlay yo'qoldi. Ayniqsa Writing va Speaking bo'yicha berilgan individual tavsiyalar natijamni 6.0 dan 7.5 ga ko'tarishimga sabab bo'ldi!\""
  },
  {
    name: "Sardorbek Mirzayev",
    role: "UI/UX Dizayner (Freelancer)",
    course: "UI/UX & Grafik Dizayn bitiruvchisi",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "\"Kurs davomida nafaqat Figma dasturini, balki haqiqiy mijozlar bilan muloqot qilish va Behance da sifatli keyslar yaratishni o'rgandim. Kurs tugashi bilan ilk 400 dollarlik buyurtmamni oldim. Markazdagi qulay sharoit va coworking muhiti a'lo darajada!\""
  },
  {
    name: "Zuhra Karimova (Ota-ona)",
    role: "O'quvchimizning onasi",
    course: "Farzandi: IT & Dasturlash o'quvchisi",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "\"Farzandim o'qishga juda qiziqib boradi, markazdagi ustozlarning mehribonligi va intizom yuqori darajada. Har oy ota-onalarga farzandimizning yutuqlari va o'zlashtirishi bo'yicha hisobot berib turishadi. O'zlik SAM jamoasiga samimiy minnatdorchilik bildiraman!\""
  }
];

const FAQS_DATA = [
  {
    question: "Dasturlash yoki dizayn kurslarini noldan boshlasam bo'ladimi?",
    answer: "Albatta! Kurslarimiz aynan hech qanday dastlabki bilimga ega bo'lmaganlar uchun noldan boshlab bosqichma-bosqich o'rgatishga moslashtirilgan. Barcha amaliy darslar sodda tilda va real misollar orqali tushuntiriladi."
  },
  {
    question: "Darslarga qatnashish uchun shaxsiy noutbuk bo'lishi shartmi?",
    answer: "O'quv markazimiz barcha zamonaviy kompyuterlar va kerakli dasturiy ta'minotlar bilan to'liq jihozlangan. Lekin uy vazifalarini bajarish va mustaqil amaliyot uchun shaxsiy noutbukingiz bo'lishi o'rganish samaradorligingizni 2 barobar oshiradi."
  },
  {
    question: "O'quv to'lovini bo'lib to'lash imkoniyati bormi?",
    answer: "Ha, markazimizda oylik bo'lib to'lash tizimi mavjud. Shuningdek, to'liq kurs uchun birdaniga to'lov amalga oshirilsa, 10% dan 15% gacha chegirma taqdim etiladi."
  },
  {
    question: "Kursni tugatgandan so'ng sertifikat beriladimi va ish topishda yordam beriladimi?",
    answer: "Ha! Kursni muvaffaqiyatli tamomlagan barcha o'quvchilarga ID raqamli xalqaro darajadagi QR-kodli rasmiy sertifikat beriladi. Shuningdek, 'O'zlik SAM Karyera Markazi' bitiruvchilarga rezyume tuzish, portfolio tayyorlash va hamkor kompaniyalarga ishga joylashishda to'liq ko'maklashadi."
  },
  {
    question: "Dars vaqtlari va kunlari qanday tashkil etilgan?",
    answer: "Darslar haftada 3 kun, toq (Dush-Chor-Juma) yoki juft (Sesh-Pay-Shanba) kunlari o'tiladi. O'quvchilar o'zlariga qulay vaqtni tanlashlari mumkin: 09:00 - 11:00 (Ertalabki guruh), 14:00 - 16:00 (Tushki guruh) va 18:30 - 20:30 (Kechki guruh)."
  },
  {
    question: "Birinchi sinov darsi bepulmi?",
    answer: "Ha, albatta! Saytimiz orqali ro'yxatdan o'ting va o'zingiz tanlagan yo'nalish bo'yicha birinchi bepul tanishuv darsida qatnashib, ustozimiz va o'quv muhiti bilan shaxsan tanishing."
  }
];

const LIVE_NOTIFICATIONS = [
  { name: "Sardor (Samarqand)", action: "Frontend Veb Dasturlash kursiga ro'yxatdan o'tdi", time: "2 daqiqa oldin" },
  { name: "Malika (Pastdarg'om)", action: "Intensive IELTS kursiga bepul darsga yozildi", time: "5 daqiqa oldin" },
  { name: "Jasur (Urgut)", action: "Python & Django Backend kursida joy band qildi", time: "8 daqiqa oldin" },
  { name: "Zilola (Samarqand)", action: "UI/UX Dizayn kursiga 20% chegirma oldi", time: "11 daqiqa oldin" },
  { name: "Bekzod (Samarqand)", action: "SMM & Target kursiga ro'yxatdan o'tdi", time: "15 daqiqa oldin" }
];
