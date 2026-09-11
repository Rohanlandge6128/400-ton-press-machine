/* =========================================================
   400 TON PRESS MACHINE
   VISUAL FACTORY DASHBOARD
========================================================= */


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");

    if (!sidebar) {
        return;
    }

    sidebar.classList.toggle("collapsed");

}


/* =========================================================
   QR CODE
========================================================= */

function showQR() {

    const modal = document.getElementById("qrModal");

    const canvas = document.getElementById("qrCanvas");

    if (!modal || !canvas) {
        return;
    }

    modal.classList.add("show");


    /*
     * Important:
     *
     * When the dashboard is opened from GitHub Pages,
     * window.location.href becomes the public dashboard URL.
     *
     * Therefore the QR code automatically points to
     * the public dashboard.
     */

    if (typeof QRCode === "undefined") {

        console.error("QRCode library not loaded.");

        return;
    }


    QRCode.toCanvas(

        canvas,

        window.location.href,

        {
            width: 250,
            margin: 2
        },

        function(error) {

            if (error) {

                console.error(
                    "QR generation failed:",
                    error
                );

            }

        }

    );

}


/* =========================================================
   CLOSE QR MODAL
========================================================= */

function hideModal() {

    const modal = document.getElementById("qrModal");

    if (modal) {

        modal.classList.remove("show");

    }

}


/* =========================================================
   CLOSE QR WHEN CLICKING BACKGROUND
========================================================= */

function closeQRFromBackground(event) {

    const modal = document.getElementById("qrModal");

    if (
        modal &&
        event.target === modal
    ) {

        hideModal();

    }

}


/* =========================================================
   COPY DASHBOARD URL
========================================================= */

function copyPageURL() {

    const url = window.location.href;


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard.writeText(url)

            .then(function() {

                showNotification(
                    "Dashboard URL copied"
                );

            })

            .catch(function() {

                fallbackCopy(url);

            });

    } else {

        fallbackCopy(url);

    }

}


/* =========================================================
   FALLBACK COPY
========================================================= */

function fallbackCopy(text) {

    const textarea =
        document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";

    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.focus();

    textarea.select();


    try {

        document.execCommand("copy");

        showNotification(
            "Dashboard URL copied"
        );

    } catch (error) {

        showNotification(
            "Unable to copy URL"
        );

    }


    document.body.removeChild(textarea);

}


/* =========================================================
   NOTIFICATION
========================================================= */

function showNotification(message) {

    const existing =
        document.querySelector(
            ".dashboard-notification"
        );


    if (existing) {

        existing.remove();

    }


    const notification =
        document.createElement("div");

    notification.className =
        "dashboard-notification";

    notification.textContent = message;


    document.body.appendChild(
        notification
    );


    setTimeout(function() {

        notification.remove();

    }, 2200);

}


/* =========================================================
   REPORT MACHINE ISSUE
========================================================= */

function reportIssue() {

    /*
     * This is intentionally a placeholder.
     *
     * Later this button can be connected to:
     * - ERPNext
     * - Maintenance Issue
     * - Email
     * - WhatsApp
     * - A maintenance ticket system
     */

    showNotification(
        "Machine issue reporting will be connected later"
    );

}


/* =========================================================
   DOCUMENT PLACEHOLDER
========================================================= */

function documentNotAvailable(documentName) {

    showNotification(
        documentName + " will be added later"
    );

}


/* =========================================================
   MACHINE IMAGE ERROR
========================================================= */

function machineImageError(image) {

    /*
     * If the JPG cannot be found,
     * display a clean placeholder instead
     * of a broken image icon.
     */

    image.style.display = "none";


    const container =
        image.parentElement;


    if (!container) {
        return;
    }


    const placeholder =
        document.createElement("div");

    placeholder.className =
        "machine-image-placeholder";


    placeholder.innerHTML = `

        <i class="fa-solid fa-industry"></i>

        <strong>400T</strong>

        <span>Machine Image</span>

    `;


    container.appendChild(
        placeholder
    );

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function setupNavigation() {

    const navItems =
        document.querySelectorAll(
            ".nav-item"
        );


    navItems.forEach(function(item) {

        item.addEventListener(
            "click",
            function() {

                navItems.forEach(
                    function(nav) {

                        nav.classList.remove(
                            "active"
                        );

                    }
                );


                item.classList.add(
                    "active"
                );


                /*
                 * On smaller screens,
                 * keep navigation usable.
                 */

                if (
                    window.innerWidth <= 850
                ) {

                    const sidebar =
                        document.getElementById(
                            "sidebar"
                        );

                    if (sidebar) {

                        sidebar.classList.add(
                            "collapsed"
                        );

                    }

                }

            }
        );

    });

}


/* =========================================================
   ESC KEY
========================================================= */

function setupKeyboardControls() {

    document.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Escape") {

                hideModal();

            }

        }
    );

}


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        setupNavigation();

        setupKeyboardControls();

    }
);