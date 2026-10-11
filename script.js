"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const languageButton = document.getElementById("languageButton");
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");
  const yearElement = document.getElementById("year");

  const translatableElements = document.querySelectorAll("[data-en][data-ar]");

  // =========================
  // LANGUAGE
  // =========================

  function setLanguage(language) {

    const isArabic = language === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";

    translatableElements.forEach(function (element) {
      const text = isArabic
        ? element.getAttribute("data-ar")
        : element.getAttribute("data-en");

      if (text !== null) {
        element.textContent = text;
      }
    });

    if (languageButton) {
      languageButton.textContent = isArabic ? "English" : "العربية";
      languageButton.setAttribute(
        "aria-label",
        isArabic ? "Switch to English" : "التبديل إلى العربية"
      );
    }

    try {
      localStorage.setItem("chefKassemLanguage", language);
    } catch (error) {
      // Website continues working if localStorage is unavailable.
    }
  }


  function getSavedLanguage() {

    try {
      const savedLanguage = localStorage.getItem("chefKassemLanguage");

      if (savedLanguage === "ar" || savedLanguage === "en") {
        return savedLanguage;
      }
    } catch (error) {
      // Use English as default.
    }

    return "en";
  }


  setLanguage(getSavedLanguage());


  if (languageButton) {

    languageButton.addEventListener("click", function () {

      const currentLanguage = document.documentElement.lang;

      if (currentLanguage === "ar") {
        setLanguage("en");
      } else {
        setLanguage("ar");
      }

    });

  }


  // =========================
  // MOBILE MENU
  // =========================

  function closeMenu() {

    if (!mainNav || !menuButton) {
      return;
    }

    mainNav.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }


  if (menuButton && mainNav) {

    menuButton.addEventListener("click", function () {

      const isOpen = mainNav.classList.toggle("open");

      menuButton.classList.toggle("open", isOpen);

      menuButton.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

    });


    mainNav.querySelectorAll("a").forEach(function (link) {

      link.addEventListener("click", function () {
        closeMenu();
      });

    });


    document.addEventListener("click", function (event) {

      const clickedInsideMenu = mainNav.contains(event.target);
      const clickedMenuButton = menuButton.contains(event.target);

      if (!clickedInsideMenu && !clickedMenuButton) {
        closeMenu();
      }

    });


    window.addEventListener("resize", function () {

      if (window.innerWidth > 820) {
        closeMenu();
      }

    });

  }


  // =========================
  // COPYRIGHT YEAR
  // =========================

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
