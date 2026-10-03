document.addEventListener("DOMContentLoaded", function () {

  const html = document.documentElement;
  const langButton = document.querySelector(".lang");
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector(".links");

  // Language
  let currentLanguage = localStorage.getItem("chefKassemLanguage") || "en";

  function setLanguage(language) {
    if (language === "ar") {
      html.lang = "ar";
      html.dir = "rtl";

      if (langButton) {
        langButton.textContent = "EN";
      }
    } else {
      html.lang = "en";
      html.dir = "ltr";

      if (langButton) {
        langButton.textContent = "AR";
      }
    }

    localStorage.setItem("chefKassemLanguage", language);
  }

  setLanguage(currentLanguage);

  if (langButton) {
    langButton.addEventListener("click", function () {
      currentLanguage =
        html.lang === "ar" ? "en" : "ar";

      setLanguage(currentLanguage);
    });
  }

  // Mobile menu
  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      navigation.classList.toggle("open");

      menuButton.textContent =
        navigation.classList.contains("open")
          ? "✕"
          : "☰";
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuButton.textContent = "☰";
      });
    });
  }

});
