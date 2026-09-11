/* =========================================================
   PPPL VISUAL FACTORY
   400 TON PRESS MACHINE
========================================================= */


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

    const body = document.body;

    /*
       Desktop:
       collapse sidebar to icons only.

       Mobile:
       open/close sidebar as a drawer.
    */

    if (window.innerWidth <= 800) {

        body.classList.toggle("sidebar-open");

    } else {

        body.classList.toggle("sidebar-collapsed");

    }
}


/* =========================================================
   QR CODE
========================================================= */

function showQR() {

    const modal = document.getElementById("qrModal");
    const canvas = document.getElementById("qrCanvas");
    const urlBox = document.getElementById("qrUrl");

    if (!modal || !canvas) {
        return;
    }

    modal.classList.add("show");

    /*
       The QR will automatically contain the current URL.

       When opened from GitHub Pages:
       it will contain the public GitHub Pages URL.

       When opened locally:
       it will contain the local file URL,
       which is only useful for testing.
    */

    const currentURL = window.location.href;

    urlBox.textContent = currentURL;

    /*
       Clear previous QR.
    */
    canvas.innerHTML = "";

    /*
       qrcodejs generates into a DIV, not canvas.
       Therefore we use a temporary QR container.
    */

    const qrContainer = document.querySelector(".qr-container");

    if (!qrContainer) {
        return;
    }

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: currentURL,
        width: 210,
        height: 210,
        colorDark: "#000000",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
    });
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
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("qrModal");

    if (!modal) {
        return;
    }

    if (
        event.target === modal
    ) {
        hideModal();
    }

});


/* =========================================================
   ESC KEY CLOSE
========================================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        hideModal();
    }

});


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
                showNotification("Dashboard URL copied");
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

    const textarea = document.createElement("textarea");

    textarea.value = text;

    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.select();

    try {

        document.execCommand("copy");

        showNotification("Dashboard URL copied");

    } catch (error) {

        showNotification("Copy failed");

    }

    document.body.removeChild(textarea);
}


/* =========================================================
   NOTIFICATION
========================================================= */

function showNotification(message) {

    const existing = document.querySelector(".dashboard-notification");

    if (existing) {
        existing.remove();
    }

    const notification = document.createElement("div");

    notification.className = "dashboard-notification";

    notification.textContent = message;

    notification.style.position = "fixed";
    notification.style.left = "50%";
    notification.style.bottom = "25px";
    notification.style.transform = "translateX(-50%)";
    notification.style.background = "#005C98";
    notification.style.color = "#FFFFFF";
    notification.style.padding = "11px 18px";
    notification.style.borderRadius = "5px";
    notification.style.fontSize = "13px";
    notification.style.fontWeight = "600";
    notification.style.zIndex = "3000";
    notification.style.boxShadow = "0 3px 12px rgba(0,0,0,0.2)";

    document.body.appendChild(notification);

    setTimeout(function() {

        notification.remove();

    }, 2200);
}


/* =========================================================
   REPORT MACHINE ISSUE
========================================================= */

function reportIssue() {

    alert(
        "Machine issue reporting will be connected here."
    );

}


/* =========================================================
   DOCUMENT PLACEHOLDER
========================================================= */

function documentNotAvailable(documentName) {

    alert(
        documentName +
        " will be added here when the actual document is available."
    );

}


/* =========================================================
   MACHINE IMAGE ERROR
========================================================= */

function machineImageError(image) {

    /*
       If JPG is missing, don't allow the broken
       image icon to destroy the layout.
    */

    image.style.display = "none";

    const container = image.parentElement;

    if (!container) {
        return;
    }

    container.classList.add("image-missing");

    container.innerHTML = `
        <div style="
            width:100%;
            height:100%;
            min-height:240px;
            border-radius:5px;
            background:#EAF5F9;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            color:#005C98;
            text-align:center;
        ">
            <i class="fa-solid fa-industry"
               style="font-size:55px;margin-bottom:12px;">
            </i>

            <strong style="font-size:20px;">
                400T
            </strong>

            <span style="
                margin-top:5px;
                font-size:12px;
            ">
                Machine Image
            </span>
        </div>
    `;
}


/* =========================================================
   MOBILE SIDEBAR LINKS
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll(".sidebar-link");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            if (window.innerWidth <= 800) {

                document.body.classList.remove(
                    "sidebar-open"
                );

            }

        });

    });

});


/* =========================================================
   RESPONSIVE SIDEBAR STATE
========================================================= */

window.addEventListener("resize", function() {

    /*
       When returning from mobile to desktop,
       remove mobile drawer state.
    */

    if (window.innerWidth > 800) {

        document.body.classList.remove(
            "sidebar-open"
        );

    }

});


/* =========================================================
   ACTIVE SIDEBAR LINK
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const links = document.querySelectorAll(".sidebar-link");

    links.forEach(function(link) {

        link.addEventListener("click", function() {

            links.forEach(function(item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });

});