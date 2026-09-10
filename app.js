/* =========================================================
   SIDEBAR TOGGLE
========================================================= */

function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");

    if (!sidebar || !mainContent) {
        return;
    }

    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("sidebar-collapsed");
}


/* =========================================================
   QR CODE
========================================================= */

function showQR() {

    const modal = document.getElementById("qrModal");
    const canvas = document.getElementById("qrCanvas");
    const pageURL = document.getElementById("pageURL");

    if (!modal || !canvas) {
        return;
    }

    modal.classList.add("show");

    const currentURL = window.location.href;

    if (pageURL) {
        pageURL.textContent = currentURL;
    }

    /*
       Clear previous QR
    */
    canvas.innerHTML = "";

    /*
       qrcodejs creates the QR inside the supplied element.
       The original dashboard URL is used automatically.
    */

    if (typeof QRCode !== "undefined") {

        canvas.innerHTML = "";

        new QRCode(canvas, {
            text: currentURL,
            width: 240,
            height: 240,
            colorDark: "#005C98",
            colorLight: "#FFFFFF",
            correctLevel: QRCode.CorrectLevel.H
        });

    } else {

        console.error("QR Code library not loaded.");

    }
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
   CLICK OUTSIDE QR MODAL
========================================================= */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("qrModal");

    if (event.target === modal) {
        hideModal();
    }

});


/* =========================================================
   COPY DASHBOARD URL
========================================================= */

function copyPageURL() {

    const url = window.location.href;

    if (navigator.clipboard && window.isSecureContext) {

        navigator.clipboard.writeText(url)
            .then(function() {
                showNotification("Dashboard URL copied");
            })
            .catch(function() {
                fallbackCopy(url);
            });

    } else {

        fallbackCopy(url);

    }
}


function fallbackCopy(text) {

    const textarea = document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.focus();
    textarea.select();

    try {
        document.execCommand("copy");
        showNotification("Dashboard URL copied");
    } catch (error) {
        console.error("Copy failed:", error);
    }

    document.body.removeChild(textarea);
}


/* =========================================================
   NOTIFICATION
========================================================= */

function showNotification(message) {

    const existing = document.getElementById("dashboardNotification");

    if (existing) {
        existing.remove();
    }

    const notification = document.createElement("div");

    notification.id = "dashboardNotification";

    notification.textContent = message;

    notification.style.position = "fixed";
    notification.style.bottom = "90px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";
    notification.style.background = "#005C98";
    notification.style.color = "#FFFFFF";
    notification.style.padding = "11px 18px";
    notification.style.borderRadius = "5px";
    notification.style.fontSize = "13px";
    notification.style.zIndex = "3000";
    notification.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";

    document.body.appendChild(notification);

    setTimeout(function() {

        notification.style.opacity = "0";
        notification.style.transition = "opacity 0.3s ease";

        setTimeout(function() {
            notification.remove();
        }, 300);

    }, 1800);
}


/* =========================================================
   MACHINE IMAGE FALLBACK
========================================================= */

function machineImageFallback(image) {

    if (!image) {
        return;
    }

    /*
       If the JPG isn't available yet, show a simple
       dashboard placeholder instead of a broken image.
    */

    image.style.display = "none";

    const container = image.parentElement;

    if (!container.querySelector(".machine-image-placeholder")) {

        const placeholder = document.createElement("div");

        placeholder.className = "machine-image-placeholder";

        placeholder.innerHTML = `
            <div style="
                text-align:center;
                color:#005C98;
                font-weight:700;
            ">
                <div style="
                    font-size:55px;
                    margin-bottom:8px;
                ">
                    <i class="fas fa-industry"></i>
                </div>

                <div style="font-size:18px;">
                    400T
                </div>

                <div style="
                    font-size:11px;
                    font-weight:400;
                    margin-top:4px;
                ">
                    Machine Image
                </div>
            </div>
        `;

        placeholder.style.width = "100%";
        placeholder.style.height = "100%";
        placeholder.style.display = "flex";
        placeholder.style.alignItems = "center";
        placeholder.style.justifyContent = "center";

        container.appendChild(placeholder);
    }
}


/* =========================================================
   REPORT MACHINE ISSUE
========================================================= */

function reportIssue() {

    alert(
        "Machine issue reporting will be connected here.\n\n" +
        "This function can later be linked to ERPNext or a maintenance workflow."
    );
}


/* =========================================================
   DOCUMENT PLACEHOLDER
========================================================= */

function documentNotAvailable(documentName) {

    alert(
        documentName +
        " will be added here once the actual document is available."
    );
}


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const sidebarLinks = document.querySelectorAll(".nav-item");

    sidebarLinks.forEach(function(link) {

        link.addEventListener("click", function() {

            if (window.innerWidth <= 760) {

                const sidebar = document.getElementById("sidebar");
                const mainContent = document.getElementById("mainContent");

                if (
                    sidebar &&
                    mainContent &&
                    !sidebar.classList.contains("collapsed")
                ) {

                    sidebar.classList.add("collapsed");
                    mainContent.classList.add("sidebar-collapsed");

                }

            }

        });

    });

});


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    /*
       Keep the sidebar open by default on desktop.
    */

    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");

    if (
        window.innerWidth <= 1050 &&
        sidebar &&
        mainContent
    ) {

        sidebar.classList.add("collapsed");
        mainContent.classList.add("sidebar-collapsed");

    }

});