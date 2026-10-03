document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("mainNav");
  const languageBtn = document.getElementById("languageBtn");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("open");
      menuBtn.textContent =
        nav.classList.contains("open") ? "✕" : "☰";
    });
  }

  if (languageBtn) {
    languageBtn.addEventListener("click", () => {

      const html = document.documentElement;
      const isArabic = html.lang === "ar";

      if (isArabic) {
        html.lang = "en";
        html.dir = "ltr";
        languageBtn.textContent = "AR";
      } else {
        html.lang = "ar";
        html.dir = "rtl";
        languageBtn.textContent = "EN";
      }

    });
  }

});
