"use strict";

/* =========================================================
   CHEF KASSEM TAHA WEBSITE
   LANGUAGE + MOBILE MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const languageButton = document.getElementById("languageButton");
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");
  const yearElement = document.getElementById("year");

  const translatableElements =
    document.querySelectorAll("[data-en][data-ar]");


  /* =======================================================
     LANGUAGE
  ======================================================= */

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

      /*
        If page is Arabic:
        button shows English.

        If page is English:
        button shows العربية.
      */

      languageButton.textContent =
        isArabic ? "English" : "العربية";

      languageButton.setAttribute(
        "aria-label",
        isArabic
          ? "Switch website to English"
          : "تحويل الموقع إلى العربية"
      );

    }


    /*
      Phone numbers must ALWAYS remain LTR,
      even when the website is Arabic.
    */

    const phoneElements = document.querySelectorAll(
      '.ltr-contact, a[href^="tel:"], a[href*="wa.me"]'
    );

    phoneElements.forEach(function (element) {

      element.style.direction = "ltr";
      element.style.unicodeBidi = "isolate";

    });


    try {
      localStorage.setItem("chefKassemLanguage", language);
    } catch (error) {
      /* Website still works if storage is unavailable */
    }

  }


  function getSavedLanguage() {

    try {

      const savedLanguage =
        localStorage.getItem("chefKassemLanguage");

      if (
        savedLanguage === "ar" ||
        savedLanguage === "en"
      ) {
        return savedLanguage;
      }

    } catch (error) {
      /* Use default language */
    }

    return "en";
  }


  /*
    Load saved language when page opens.
  */

  setLanguage(getSavedLanguage());


  /*
    Language button
  */

  if (languageButton) {

    languageButton.addEventListener(
      "click",
      function () {

        const currentLanguage =
          document.documentElement.lang;

        if (currentLanguage === "ar") {
          setLanguage("en");
        } else {
          setLanguage("ar");
        }

        closeMobileMenu();

      }
    );

  }


  /* =======================================================
     MOBILE MENU
  ======================================================= */

  function openMobileMenu() {

    if (!mainNav || !menuButton) {
      return;
    }

    mainNav.classList.add("open");

    menuButton.classList.add("open");

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    document.body.classList.add("menu-open");

  }


  function closeMobileMenu() {

    if (!mainNav || !menuButton) {
      return;
    }

    mainNav.classList.remove("open");

    menuButton.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.classList.remove("menu-open");

  }


  function toggleMobileMenu() {

    if (!mainNav) {
      return;
    }

    if (mainNav.classList.contains("open")) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }

  }


  if (menuButton) {

    menuButton.addEventListener(
      "click",
      function (event) {

        event.stopPropagation();

        toggleMobileMenu();

      }
    );

  }


  /*
    Close menu after selecting a navigation link.
  */

  if (mainNav) {

    const navLinks =
      mainNav.querySelectorAll("a");

    navLinks.forEach(function (link) {

      link.addEventListener(
        "click",
        function () {

          closeMobileMenu();

        }
      );

    });

  }


  /*
    Close menu when tapping outside.
  */

  document.addEventListener(
    "click",
    function (event) {

      if (!mainNav || !menuButton) {
        return;
      }

      if (!mainNav.classList.contains("open")) {
        return;
      }

      const clickedInsideMenu =
        mainNav.contains(event.target);

      const clickedMenuButton =
        menuButton.contains(event.target);

      if (
        !clickedInsideMenu &&
        !clickedMenuButton
      ) {
        closeMobileMenu();
      }

    }
  );


  /*
    Close mobile menu if screen becomes desktop size.
  */

  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth > 820) {
        closeMobileMenu();
      }

    }
  );


  /* =======================================================
     COPYRIGHT YEAR
  ======================================================= */

  if (yearElement) {

    yearElement.textContent =
      new Date().getFullYear();

  }

});
