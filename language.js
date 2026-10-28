
(() => {
  const button = document.getElementById("language-toggle");
  if (!button) return;

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
      "about.text": "Motivated Software Engineering graduate passionate about web and mobile development, software engineering principles, and building practical digital solutions. I enjoy learning new technologies and turning ideas into useful applications.",

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
      "nav.about": "من أنا",
      "nav.education": "التعليم",
      "nav.skills": "المهارات",
      "nav.projects": "المشاريع",
      "nav.experience": "الخبرة",
      "nav.certificates": "الشهادات",
      "nav.contact": "تواصل معي",

      "hero.kicker": "خريج هندسة برمجيات",
      "hero.name": "قصي القرعان",
      "hero.role": "مطور ويب وتطبيقات موبايل",
      "hero.description": "أعمل على تطوير حلول رقمية عملية، مع التركيز على كتابة كود نظيف وتصميم مدروس والتعلم المستمر.",
      "hero.work": "استكشف مشاريعي ↗",
      "hero.cv": "تحميل السيرة الذاتية ↓",
      "hero.university": "هندسة البرمجيات · جامعة العلوم والتكنولوجيا",
      "hero.location": "الأردن",
      "hero.availability": "متاح للفرص الوظيفية",
      "hero.purpose": "نبني حلولًا هادفة",
      "hero.scroll": "↓ انتقل لاستكشاف الموقع",

      "about.kicker": "تعرّف عليّ",
      "about.title": "نبذة عني",
      "about.text": "خريج هندسة برمجيات لدي شغف بتطوير مواقع الويب وتطبيقات الموبايل وتطبيق مبادئ هندسة البرمجيات وبناء حلول رقمية عملية. أستمتع بتعلم التقنيات الجديدة وتحويل الأفكار إلى تطبيقات مفيدة.",

      "education.kicker": "خلفيتي الأكاديمية",
      "education.title": "التعليم",
      "education.degreeType": "درجة البكالوريوس · 2026",
      "education.degree": "بكالوريوس هندسة البرمجيات",
      "education.university": "جامعة العلوم والتكنولوجيا الأردنية",
      "education.year": "سنة التخرج: 2026",
      "education.grade": "التقدير: جيد جدًا",

      "skills.kicker": "التقنيات التي أستخدمها",
      "skills.title": "المهارات التقنية",
      "skills.problemSolving": "حل المشكلات",

      "projects.kicker": "أعمال مختارة",
      "projects.title": "أبرز المشاريع",
      "projects.type": "مشروع التخرج",
      "projects.name": "نظام تأجير المعدات",
      "projects.description": "تطبيق موبايل تم تطويره باستخدام Flutter لتسهيل عملية تأجير المعدات. يمكن للمستخدمين استعراض المعدات المتاحة والاطلاع على تفاصيلها وإرسال طلبات التأجير.",
      "projects.description2": "يتضمن النظام أيضًا لوحة تحكم للمسؤول لإدارة المعدات وطلبات التأجير.",
      "projects.link": "عرض المشروع على GitHub ↗",

      "experience.kicker": "التعلم من خلال التطبيق",
      "experience.title": "الخبرة العملية",
      "experience.date": "ديسمبر 2025 — مارس 2026",
      "experience.role": "متدرب ASP.NET Core 8",
      "experience.item1": "تدريب عملي على تطوير التطبيقات باستخدام ASP.NET Core 8.",
      "experience.item2": "التعامل مع بنية MVC في تطوير الويب.",
      "experience.item3": "استخدام Entity Framework Core وقواعد بيانات SQL.",
      "experience.item4": "تطبيق مبادئ البرمجة كائنية التوجه وكتابة كود منظم.",

      "certificates.kicker": "التعلم المستمر",
      "certificates.title": "الشهادات",
      "certificates.date": "أكتوبر 2023",
      "certificates.name": "شهادة دورة البرمجة بلغة C++",
      "certificates.details": "32 ساعة تدريبية · Beprogrammer.org",

      "contact.kicker": "لنبقَ على تواصل",
      "contact.title": "هل لديك فرصة مناسبة؟",
      "contact.description": "أبحث عن فرص في تطوير البرمجيات تتيح لي المساهمة في العمل والتعلم والتطور ضمن فريق.",
      "contact.emailLabel": "البريد الإلكتروني",
      "contact.phoneLabel": "رقم الهاتف",

      "footer.text": "© 2026 قصي القرعان. تم تطوير الموقع بعناية."
    }
  };

  function applyLanguage(lang) {
    const dictionary = translations[lang];
    if (!dictionary) return;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    button.textContent = lang === "en" ? "AR" : "EN";

    button.setAttribute(
      "aria-label",
      lang === "en" ? "Switch to Arabic" : "Switch to English"
    );

    button.setAttribute("aria-pressed", String(lang === "ar"));

    document.title = lang === "ar"
      ? "قصي القرعان | معرض الأعمال"
      : "Qusay Alquraan | Portfolio";

    try {
      localStorage.setItem("portfolio-language", lang);
    } catch (error) {
      // The language toggle still works if localStorage is unavailable.
    }
  }

  button.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang;
    applyLanguage(currentLanguage === "en" ? "ar" : "en");
  });

  let initialLanguage = "en";

  try {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (savedLanguage === "ar" || savedLanguage === "en") {
      initialLanguage = savedLanguage;
    }
  } catch (error) {
    // English is the default language.
  }

  applyLanguage(initialLanguage);
})();
