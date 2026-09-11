/* =========================================================
   PPPL VISUAL FACTORY
   400 TON PRESS MACHINE
   ========================================================= */


/* =========================================================
   SIDEBAR
   ========================================================= */

function toggleSidebar() {
    document.body.classList.toggle("sidebar-collapsed");
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
        On GitHub Pages this will automatically use:

        https://rohanlandge6128.github.io/400-ton-press-machine/

        When testing locally it will use the local file URL.
        The final QR should therefore be generated/tested
        after opening the GitHub Pages version.
    */

    QRCode.toCanvas(
        canvas,
        window.location.href,
        {
            width: 250,
            margin: 2,
            errorCorrectionLevel: "H"
        },
        function(error) {

            if (error) {
                console.error("QR Code Error:", error);
            }

        }
    );
}


function hideModal() {

    const modal = document.getElementById("qrModal");

    if (modal) {
        modal.classList.remove("show");
    }
}


/* Close QR modal when clicking outside */

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

    textarea.select();

    try {
        document.execCommand("copy");
        showNotification("Dashboard URL copied");
    } catch (error) {
        alert("Please copy this URL manually:\n\n" + text);
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
    notification.style.bottom = "85px";
    notification.style.right = "25px";
    notification.style.background = "#005C98";
    notification.style.color = "#FFFFFF";
    notification.style.padding = "11px 18px";
    notification.style.borderRadius = "5px";
    notification.style.fontSize = "13px";
    notification.style.fontWeight = "600";
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

    image.onerror = null;

    image.src =
        "data:image/svg+xml;charset=UTF-8," +
        encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg"
                 width="900"
                 height="500"
                 viewBox="0 0 900 500">

                <rect width="900"
                      height="500"
                      fill="#EAF5F8"/>

                <g fill="#005C98"
                   text-anchor="middle"
                   font-family="Arial">

                    <text x="450"
                          y="225"
                          font-size="80"
                          font-weight="bold">
                        400T
                    </text>

                    <text x="450"
                          y="275"
                          font-size="24">
                        MACHINE IMAGE
                    </text>

                </g>

            </svg>
        `);
}


/* =========================================================
   REPORT MACHINE ISSUE
   ========================================================= */

function reportIssue() {

    alert(
        "Machine issue reporting will be connected here.\n\n" +
        "This section can later be connected to ERPNext or " +
        "a maintenance ticketing system."
    );
}


/* =========================================================
   DOCUMENT PLACEHOLDER
   ========================================================= */

function documentNotAvailable(documentName) {

    alert(
        documentName +
        " will be added here when the actual document is uploaded."
    );
}


/* =========================================================
   SIDEBAR NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {

        item.addEventListener("click", function() {

            navItems.forEach(function(nav) {
                nav.classList.remove("active");
            });

            item.classList.add("active");

        });

    });

});


/* =========================================================
   UPDATE TIME
   ========================================================= */

function updateLastUpdatedTime() {

    /*
        Currently kept as static reference data.

        Later this can be connected to live ERPNext /
        production data.
    */

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    updateLastUpdatedTime();

});