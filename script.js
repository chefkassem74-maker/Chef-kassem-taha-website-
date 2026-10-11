"use strict";

/* =========================================================
   CHEF KASSEM TAHA
   LANGUAGE + MOBILE MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const languageButton = document.getElementById("languageButton");
  const menuButton = document.getElementById("menuButton");
  const mainNav = document.getElementById("mainNav");
  const yearElement = document.getElementById("year");

  const bilingualElements =
    document.querySelectorAll("[data-en][data-ar]");


  /* =======================================================
     LANGUAGE
  ======================================================= */

  function setLanguage(language) {

    const isArabic = language === "ar";

    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";


    bilingualElements.forEach(function (element) {

      const text = isArabic
        ? element.getAttribute("data-ar")
        : element.getAttribute("data-en");

      if (text !== null) {
        element.textContent = text;
      }

    });


    /* Button shows the OTHER available language */

    if (languageButton) {
      languageButton.textContent = isArabic ? "EN" : "AR";

      languageButton.setAttribute(
        "aria-label",
        isArabic
          ? "Switch to English"
          : "التبديل إلى العربية"
      );
    }


    /* Keep phone numbers left-to-right */

    document
      .querySelectorAll(
        '.ltr-contact, a[href^="tel:"], a[href*="wa.me"]'
      )
      .forEach(function (element) {

        element.setAttribute("dir", "ltr");

      });


    try {
      localStorage.setItem(
        "chefKassemLanguage",
        language
      );
    } catch (error) {
      /* Website continues even if storage is unavailable */
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


  if (languageButton) {

    languageButton.addEventListener(
      "click",
      function () {

        const currentLanguage =
          document.documentElement.lang === "ar"
            ? "ar"
            : "en";

        const newLanguage =
          currentLanguage === "ar"
            ? "en"
            : "ar";

        setLanguage(newLanguage);

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


  /* Close menu when clicking outside */

  document.addEventListener(
    "click",
    function (event) {

      if (
        !mainNav ||
        !menuButton ||
        !mainNav.classList.contains("open")
      ) {
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


  /* Close mobile menu when screen becomes desktop */

  window.addEventListener(
    "resize",
    function () {

      if (window.innerWidth > 820) {
        closeMobileMenu();
      }

    }
  );


  /* =======================================================
     CURRENT YEAR
  ======================================================= */

  if (yearElement) {
    yearElement.textContent =
      new Date().getFullYear();
  }


  /* =======================================================
     INITIALIZE WEBSITE
  ======================================================= */

  const savedLanguage =
    getSavedLanguage();

  setLanguage(savedLanguage);

});
