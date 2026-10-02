/* =========================================================
   CHEF KASSEM TAHA
   MAIN JAVASCRIPT
   Arabic / English + Mobile Navigation
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
       ===================================================== */

    const html = document.documentElement;

    const languageButton =
        document.getElementById("languageButton");

    const menuButton =
        document.getElementById("menuButton");

    const mainNav =
        document.getElementById("mainNav");


    /* =====================================================
       LANGUAGE SYSTEM
       ===================================================== */

    function setLanguage(language) {

        const isArabic = language === "ar";


        /* HTML LANGUAGE + DIRECTION */

        html.setAttribute(
            "lang",
            isArabic ? "ar" : "en"
        );

        html.setAttribute(
            "dir",
            isArabic ? "rtl" : "ltr"
        );


        /* TRANSLATE TEXT */

        document
            .querySelectorAll("[data-ar][data-en]")
            .forEach(function (element) {

                const text = isArabic
                    ? element.getAttribute("data-ar")
                    : element.getAttribute("data-en");

                if (text !== null) {
                    element.textContent = text;
                }

            });


        /* TRANSLATE PLACEHOLDERS */

        document
            .querySelectorAll(
                "[data-ar-placeholder][data-en-placeholder]"
            )
            .forEach(function (element) {

                element.placeholder = isArabic
                    ? element.getAttribute(
                        "data-ar-placeholder"
                    )
                    : element.getAttribute(
                        "data-en-placeholder"
                    );

            });


        /* LANGUAGE BUTTON */

        if (languageButton) {

            languageButton.textContent =
                isArabic ? "EN" : "AR";

            languageButton.setAttribute(
                "aria-label",
                isArabic
                    ? "Switch to English"
                    : "التبديل إلى العربية"
            );

        }


        /* SAVE LANGUAGE */

        try {

            localStorage.setItem(
                "chefKassemLanguage",
                language
            );

        } catch (error) {

            console.warn(
                "Language preference could not be saved."
            );

        }


        /* CLOSE MOBILE MENU */

        closeMobileMenu();

    }


    /* =====================================================
       GET SAVED LANGUAGE
       ===================================================== */

    function getSavedLanguage() {

        try {

            const savedLanguage =
                localStorage.getItem(
                    "chefKassemLanguage"
                );

            if (
                savedLanguage === "ar" ||
                savedLanguage === "en"
            ) {

                return savedLanguage;

            }

        } catch (error) {

            console.warn(
                "Saved language could not be loaded."
            );

        }


        /* DEFAULT LANGUAGE */

        return "ar";

    }


    /* =====================================================
       LANGUAGE BUTTON CLICK
       ===================================================== */

    if (languageButton) {

        languageButton.addEventListener(
            "click",
            function () {

                const currentLanguage =
                    html.getAttribute("lang");

                const newLanguage =
                    currentLanguage === "ar"
                        ? "en"
                        : "ar";

                setLanguage(newLanguage);

            }
        );

    }


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    function openMobileMenu() {

        if (!mainNav || !menuButton) {
            return;
        }

        mainNav.classList.add("open");

        menuButton.setAttribute(
            "aria-expanded",
            "true"
        );

        menuButton.textContent = "✕";

    }


    function closeMobileMenu() {

        if (!mainNav || !menuButton) {
            return;
        }

        mainNav.classList.remove("open");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.textContent = "☰";

    }


    function toggleMobileMenu() {

        if (!mainNav) {
            return;
        }

        if (
            mainNav.classList.contains("open")
        ) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }


    /* =====================================================
       MENU BUTTON
       ===================================================== */

    if (menuButton) {

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                toggleMobileMenu();

            }
        );

    }


    /* =====================================================
       CLOSE MENU AFTER LINK CLICK
       ===================================================== */

    if (mainNav) {

        const navigationLinks =
            mainNav.querySelectorAll("a");

        navigationLinks.forEach(
            function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        closeMobileMenu();

                    }
                );

            }
        );

    }


    /* =====================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
       ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            if (
                !mainNav ||
                !menuButton
            ) {
                return;
            }

            const clickedInsideMenu =
                mainNav.contains(
                    event.target
                );

            const clickedMenuButton =
                menuButton.contains(
                    event.target
                );

            if (
                !clickedInsideMenu &&
                !clickedMenuButton
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       ESC KEY
       ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       WINDOW RESIZE
       ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (window.innerWidth > 900) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       ACTIVE PAGE
       ===================================================== */

    function setActivePage() {

        if (!mainNav) {
            return;
        }


        let currentPage =
            window.location.pathname
                .split("/")
                .pop();


        if (
            !currentPage ||
            currentPage === ""
        ) {

            currentPage =
                "index.html";

        }


        const links =
            mainNav.querySelectorAll("a");


        links.forEach(
            function (link) {

                const linkPage =
                    link
                        .getAttribute("href")
                        ?.split("/")
                        .pop();


                if (
                    linkPage === currentPage
                ) {

                    link.classList.add(
                        "active"
                    );

                } else {

                    link.classList.remove(
                        "active"
                    );

                }

            }
        );

    }


    /* =====================================================
       INITIALIZE WEBSITE
       ===================================================== */

    const initialLanguage =
        getSavedLanguage();


    setLanguage(
        initialLanguage
    );


    setActivePage();

});
