
"use strict";

// Chef Kassem Taha — Home Page
// Arabic / English, mobile navigation and service finder.

const translations = {
  en: {
    skip: "Skip to content",
    brandSub: "CULINARY • HOSPITALITY • CONSULTING",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navAcademy: "Academy",
    navRecipes: "Recipes",
    navBlog: "Blog",
    navProjects: "Projects",
    navStore: "Store",
    navContact: "Contact",
    eyebrow: "WELCOME TO CHEF KASSEM TAHA",
    headline: "From World Cuisines to Your Table",
    tagline: "From experience to excellence in hospitality",
    intro: "More than 33 years of professional experience in culinary arts, restaurant and hotel operations, central kitchens, training, food safety and business development.",
    explore: "Explore Services",
    find: "Find Your Solution",
    years: "Years of experience",
    philosophy: "The business must depend on the system — not on one person.",
    photoCaption: "CULINARY LEADERSHIP • PRACTICAL EXPERIENCE",
    specialty1: "Restaurant & Hotel Development",
    specialty2: "Central Kitchen Systems",
    specialty3: "Training & Academy",
    specialty4: "SOP & Food Safety",
    servicesEyebrow: "OUR CORE SERVICES",
    servicesTitle: "Solutions built for your business",
    servicesIntro: "From concept to operation, practical services designed for consistency, quality and long-term performance.",
    card1: "Restaurant & Hotel Setup",
    card1desc: "Planning, launch and operational development",
    card2: "Menu & Culinary Development",
    card2desc: "Recipes, menu engineering and cost control",
    card3: "Central Kitchens & Systems",
    card3desc: "Production, purchasing, storage and food safety",
    card4: "Training & Academy",
    card4desc: "Practical training and team development",
    processEyebrow: "OUR APPROACH",
    processTitle: "Experience. Systems. Results.",
    processDesc: "Every operation needs clear standards, trained people and a system that keeps working.",
    step1: "Discover",
    step2: "Audit",
    step3: "Design",
    step4: "Implement",
    step5: "Train",
    step6: "Improve",
    finderEyebrow: "HOW CAN WE HELP?",
    finderTitle: "Tell us what you are building",
    finderDesc: "Choose the area you need help with. We will direct you to the most relevant service.",
    question: "What best describes your project?",
    select: "Choose a project type",
    optNew: "Starting a restaurant or hotel",
    optExisting: "Improving an existing business",
    optKitchen: "Building a central kitchen",
    optTraining: "Training a team",
    optMenu: "Developing a menu",
    consult: "Discuss Your Project",
    closingEyebrow: "LET'S BUILD SOMETHING LASTING",
    closingTitle: "Great hospitality starts with great systems.",
    contactCta: "Contact Chef Kassem",
    footerDesc: "Culinary & Hospitality Consulting",
    footerLinks: "Explore",
    footerContact: "Get in touch",
    footerTag: "From World Cuisines to Your Table",
    recommendations: {
      new: "Recommended: Restaurant & Hotel Setup",
      existing: "Recommended: Operations Audit & Development",
      kitchen: "Recommended: Central Kitchen Consulting",
      training: "Recommended: Staff Training & Academy",
      menu: "Recommended: Menu & Culinary Development"
    }
  },

  ar: {
    skip: "انتقل إلى المحتوى",
    brandSub: "فنون الطهي • الضيافة • الاستشارات",
    navHome: "الرئيسية",
    navAbout: "من نحن",
    navServices: "خدماتنا",
    navAcademy: "الأكاديمية",
    navRecipes: "الوصفات",
    navBlog: "المدونة",
    navProjects: "المشاريع",
    navStore: "المتجر",
    navContact: "تواصل معنا",
    eyebrow: "أهلاً بكم في عالم الشيف قاسم طه",
    headline: "من مطابخ العالم إلى مائدتكم",
    tagline: "من الخبرة إلى التميز في عالم الضيافة",
    intro: "أكثر من 33 عاماً من الخبرة المهنية في فنون الطهي وإدارة المطاعم والفنادق والمطابخ المركزية والتدريب وسلامة الغذاء وتطوير الأعمال.",
    explore: "اكتشف خدماتنا",
    find: "اختر الحل المناسب",
    years: "عاماً من الخبرة",
    philosophy: "يجب أن يعتمد العمل على النظام، وليس على شخص واحد.",
    photoCaption: "قيادة في فنون الطهي • خبرة عملية",
    specialty1: "تأسيس وتطوير المطاعم والفنادق",
    specialty2: "أنظمة المطابخ المركزية",
    specialty3: "التدريب والأكاديمية",
    specialty4: "إجراءات التشغيل وسلامة الغذاء",
    servicesEyebrow: "خدماتنا الأساسية",
    servicesTitle: "حلول احترافية لتطوير أعمالكم",
    servicesIntro: "من الفكرة إلى التشغيل، نقدم خدمات عملية تهدف إلى تحقيق الجودة والاستمرارية ورفع كفاءة الأداء.",
    card1: "تأسيس المطاعم والفنادق",
    card1desc: "التخطيط والتجهيز والافتتاح وتطوير التشغيل",
    card2: "تطوير قوائم الطعام وفنون الطهي",
    card2desc: "تطوير الوصفات وهندسة القوائم وضبط التكاليف",
    card3: "المطابخ المركزية وأنظمة التشغيل",
    card3desc: "الإنتاج والمشتريات والتخزين وسلامة الغذاء",
    card4: "الأكاديمية والتدريب",
    card4desc: "التدريب العملي وتطوير مهارات فرق العمل",
    processEyebrow: "منهجية العمل",
    processTitle: "خبرة. أنظمة. نتائج.",
    processDesc: "كل مشروع ناجح يحتاج إلى معايير واضحة وكوادر مدربة ونظام يضمن استمرارية العمل.",
    step1: "اكتشاف الاحتياجات",
    step2: "التقييم",
    step3: "التصميم",
    step4: "التنفيذ",
    step5: "التدريب",
    step6: "التحسين",
    finderEyebrow: "كيف يمكننا مساعدتك؟",
    finderTitle: "أخبرنا عن مشروعك",
    finderDesc: "اختر المجال الذي تحتاج فيه إلى المساعدة لنرشدك إلى الخدمة الأنسب.",
    question: "ما نوع مشروعك أو احتياجك؟",
    select: "اختر نوع المشروع",
    optNew: "تأسيس مطعم أو فندق جديد",
    optExisting: "تطوير مشروع قائم",
    optKitchen: "إنشاء مطبخ مركزي",
    optTraining: "تدريب فريق العمل",
    optMenu: "تطوير قائمة الطعام",
    consult: "ناقش مشروعك معنا",
    closingEyebrow: "لنبنِ مشروعاً مستداماً",
    closingTitle: "الضيافة المتميزة تبدأ بأنظمة عمل متكاملة.",
    contactCta: "تواصل مع الشيف قاسم",
    footerDesc: "استشارات فنون الطهي والضيافة",
    footerLinks: "استكشف الموقع",
    footerContact: "معلومات التواصل",
    footerTag: "من مطابخ العالم إلى مائدتكم",
    recommendations: {
      new: "الخدمة المناسبة: تأسيس المطاعم والفنادق",
      existing: "الخدمة المناسبة: تقييم وتطوير العمليات التشغيلية",
      kitchen: "الخدمة المناسبة: استشارات المطابخ المركزية",
      training: "الخدمة المناسبة: تدريب وتطوير فرق العمل",
      menu: "الخدمة المناسبة: تطوير وهندسة قوائم الطعام"
    }
  }
};

const languageButton = document.querySelector(".lang-toggle");
const languageLabel = document.querySelector(".lang-label");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
const projectSelect = document.querySelector("#project-type");
const recommendation = document.querySelector("#recommendation");
const finderLink = document.querySelector("#finder-link");

let currentLanguage = "en";

try {
  const savedLanguage = localStorage.getItem("chefKassemLanguage");
  if (savedLanguage === "ar" || savedLanguage === "en") {
    currentLanguage = savedLanguage;
  }
} catch (error) {
  // The site continues working if storage is unavailable.
}

function updateRecommendation() {
  if (!projectSelect || !recommendation) return;

  const selected = projectSelect.value;
  const dictionary = translations[currentLanguage];

  recommendation.textContent =
    dictionary.recommendations[selected] || "";

  if (finderLink) {
    finderLink.href = "contact.html";
  }
}

function applyLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;

  document.documentElement.lang = language;
  document.documentElement.dir =
    language === "ar" ? "rtl" : "ltr";

  const dictionary = translations[language];

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.textContent = dictionary[key];
    }
  });

  if (languageLabel) {
    languageLabel.textContent =
      language === "ar" ? "English" : "العربية";
  }

  if (languageButton) {
    languageButton.setAttribute(
      "aria-label",
      language === "ar"
        ? "Switch to English"
        : "التبديل إلى العربية"
    );
  }

  updateRecommendation();

  try {
    localStorage.setItem("chefKassemLanguage", language);
  } catch (error) {
    // Ignore storage restrictions.
  }
}

if (languageButton) {
  languageButton.addEventListener("click", () => {
    applyLanguage(currentLanguage === "en" ? "ar" : "en");
  });
}

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

if (projectSelect) {
  projectSelect.addEventListener("change", updateRecommendation);
}

const yearElement = document.querySelector("#year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

applyLanguage(currentLanguage);

