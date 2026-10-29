
(() => {
  const toggle = document.getElementById("language-toggle");
  if (!toggle) return;

  const translations = {
    en: {
      "nav.home": "Home",
      "nav.about": "About",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.certificates": "Certificates",
      "nav.contact": "Contact",

      "hero.kicker": "SOFTWARE ENGINEERING GRADUATE",
      "hero.name": "Qusay Alquraan",
      "hero.role": "Web & Mobile Developer",
      "hero.description": "I build practical digital experiences with a focus on clean code, thoughtful design, and continuous learning.",
      "hero.work": "Explore My Work ↗",
      "hero.cv": "Download CV ↓",
      "hero.university": "Software Engineering · JUST",
      "hero.location": "Jordan",
      "hero.availability": "Open to opportunities",
      "hero.purpose": "Building with purpose",
      "hero.scroll": "↓ SCROLL TO EXPLORE",

      "about.kicker": "GET TO KNOW ME",
      "about.title": "About Me",
      "about.text": "Motivated Software Engineering graduate passionate about web and mobile development, software engineering principles, and building practical digital solutions.",

      "education.kicker": "MY BACKGROUND",
      "education.title": "Education",
      "education.degreeType": "BACHELOR'S DEGREE · 2026",
      "education.degree": "Bachelor of Software Engineering",
      "education.university": "Jordan University of Science and Technology (JUST)",
      "education.year": "Graduated 2026",
      "education.grade": "Grade: Very Good",

      "skills.kicker": "WHAT I WORK WITH",
      "skills.title": "Technical Skills",
      "skills.problemSolving": "Problem Solving",

      "projects.kicker": "SELECTED WORK",
      "projects.title": "Featured Project",
      "projects.type": "Graduation Project",
      "projects.name": "Equipment Rental System",
      "projects.description": "A mobile application built using Flutter to simplify equipment rental. Users can browse available equipment, view details, and submit rental requests.",
      "projects.description2": "The system also includes an admin panel to manage equipment and rental requests.",
      "projects.link": "View project on GitHub ↗",

      "experience.kicker": "LEARNING BY BUILDING",
      "experience.title": "Experience",
      "experience.date": "DEC 2025 — MAR 2026",
      "experience.role": "ASP.NET Core 8 Trainee",
      "experience.item1": "Practical training in ASP.NET Core 8 development.",
      "experience.item2": "Worked with MVC architecture.",
      "experience.item3": "Used Entity Framework Core and SQL databases.",
      "experience.item4": "Applied OOP principles and clean code practices.",

      "certificates.kicker": "CONTINUOUS LEARNING",
      "certificates.title": "Certificates",
      "certificates.date": "OCTOBER 2023",
      "certificates.name": "C++ Course Certificate",
      "certificates.details": "32 hours of training · Beprogrammer.org",

      "contact.kicker": "LET'S CONNECT",
      "contact.title": "Have an opportunity in mind?",
      "contact.description": "I am interested in software development opportunities where I can contribute, learn, and grow with a team.",
      "contact.emailLabel": "Email",
      "contact.phoneLabel": "Phone",

      "footer.text": "© 2026 Qusay Alquraan. Built with care."
    },

    ar: {
      "nav.home": "الرئيسية",
      "nav.about": "نبذة عني",
      "nav.education": "التعليم",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع",
      "nav.experience": "الخبرة",
      "nav.certificates": "الشهادات",
      "nav.contact": "تواصل معي",

      "hero.kicker": "خريج هندسة البرمجيات",
      "hero.name": "قصي القرعان",
      "hero.role": "مطور ويب وتطبيقات موبايل",
      "hero.description": "أعمل على بناء حلول رقمية عملية مع التركيز على كتابة كود واضح، وتصميم مدروس، والتعلم المستمر.",
      "hero.work": "استكشف أعمالي ↗",
      "hero.cv": "تحميل السيرة الذاتية ↓",
      "hero.university": "هندسة البرمجيات · JUST",
      "hero.location": "الأردن",
      "hero.availability": "متاح للفرص المهنية",
      "hero.purpose": "أبني حلولًا لها هدف",
      "hero.scroll": "↓ اكتشف المزيد",

      "about.kicker": "تعرّف عليّ",
      "about.title": "نبذة عني",
      "about.text": "خريج هندسة برمجيات طموح، مهتم بتطوير الويب وتطبيقات الموبايل ومبادئ هندسة البرمجيات وبناء حلول رقمية عملية.",

      "education.kicker": "خلفيتي التعليمية",
      "education.title": "التعليم",
      "education.degreeType": "درجة البكالوريوس · 2026",
      "education.degree": "بكالوريوس هندسة البرمجيات",
      "education.university": "جامعة العلوم والتكنولوجيا الأردنية",
      "education.year": "سنة التخرج 2026",
      "education.grade": "التقدير: جيد جدًا",

      "skills.kicker": "التقنيات التي أستخدمها",
      "skills.title": "المهارات التقنية",
      "skills.problemSolving": "حل المشكلات",

      "projects.kicker": "أعمال مختارة",
      "projects.title": "المشروع المميز",
      "projects.type": "مشروع التخرج",
      "projects.name": "نظام تأجير المعدات",
      "projects.description": "تطبيق موبايل باستخدام Flutter لتسهيل تأجير المعدات. يمكن للمستخدمين استعراض المعدات المتاحة، وعرض تفاصيلها، وإرسال طلبات التأجير.",
      "projects.description2": "يتضمن النظام أيضًا لوحة تحكم إدارية لإدارة المعدات وطلبات التأجير.",
      "projects.link": "عرض المشروع على GitHub ↗",

      "experience.kicker": "التعلم من خلال التطبيق",
      "experience.title": "الخبرة",
      "experience.date": "ديسمبر 2025 — مارس 2026",
      "experience.role": "متدرب ASP.NET Core 8",
      "experience.item1": "تدريب عملي على تطوير التطبيقات باستخدام ASP.NET Core 8.",
      "experience.item2": "العمل باستخدام معمارية MVC.",
      "experience.item3": "استخدام Entity Framework Core وقواعد بيانات SQL.",
      "experience.item4": "تطبيق مبادئ البرمجة كائنية التوجه وممارسات كتابة الكود النظيف.",

      "certificates.kicker": "التعلم المستمر",
      "certificates.title": "الشهادات",
      "certificates.date": "أكتوبر 2023",
      "certificates.name": "شهادة دورة C++",
      "certificates.details": "32 ساعة تدريبية · Beprogrammer.org",

      "contact.kicker": "لنتواصل معًا",
      "contact.title": "هل لديك فرصة مناسبة؟",
      "contact.description": "أهتم بفرص تطوير البرمجيات التي أستطيع من خلالها المساهمة والتعلم والتطور ضمن فريق عمل.",
      "contact.emailLabel": "البريد الإلكتروني",
      "contact.phoneLabel": "الهاتف",

      "footer.text": "© 2026 قصي القرعان. صُنع باهتمام."
    }
  };

  function setLanguage(language) {
    const selected = translations[language] ? language : "en";

    document.documentElement.lang = selected;
    document.documentElement.dir = selected === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      const value = translations[selected][key];

      if (value !== undefined) {
        element.textContent = value;
      }
    });

    document.title = selected === "ar"
      ? "قصي القرعان | معرض الأعمال"
      : "Qusay Alquraan | Portfolio";

    toggle.textContent = selected === "ar" ? "EN" : "AR";
    toggle.setAttribute(
      "aria-label",
      selected === "ar" ? "Switch to English" : "التبديل إلى العربية"
    );

    try {
      localStorage.setItem("portfolio-language", selected);
    } catch (error) {
      // The page still works if local storage is unavailable.
    }
  }

  let initialLanguage = "en";

  try {
    const savedLanguage = localStorage.getItem("portfolio-language");
    if (savedLanguage === "ar" || savedLanguage === "en") {
      initialLanguage = savedLanguage;
    }
  } catch (error) {
    // Use English if local storage is unavailable.
  }

  toggle.addEventListener("click", () => {
    const nextLanguage =
      document.documentElement.lang === "ar" ? "en" : "ar";

    setLanguage(nextLanguage);
  });

  setLanguage(initialLanguage);
})();
