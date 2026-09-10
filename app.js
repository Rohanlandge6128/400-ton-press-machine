/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

    const isMobile = window.innerWidth <= 800;

    if (isMobile) {

        document.body.classList.toggle("mobile-menu-open");

    } else {

        document.body.classList.toggle("sidebar-collapsed");

    }

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
        IMPORTANT:
        When hosted on GitHub Pages, this will automatically
        generate a QR containing the public dashboard URL.
    */

    QRCode.toCanvas(
        canvas,
        window.location.href,
        {
            width: 260,
            margin: 2,
            errorCorrectionLevel: "H"
        },
        function(error) {

            if (error) {
                console.error("QR generation error:", error);
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
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("qrModal");

    if (!modal) {
        return;
    }

    if (
        modal.classList.contains("show") &&
        event.target === modal
    ) {

        hideModal();

    }

});


/* =========================================================
   COPY DASHBOARD URL
========================================================= */

function copyPageURL() {

    const url = window.location.href;

    if (navigator.clipboard) {

        navigator.clipboard.writeText(url)
            .then(function() {

                showNotification("Dashboard URL copied!");

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

    const textArea = document.createElement("textarea");

    textArea.value = text;

    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";

    document.body.appendChild(textArea);

    textArea.select();

    try {

        document.execCommand("copy");

        showNotification("Dashboard URL copied!");

    } catch (error) {

        alert("Please copy this URL manually:\n\n" + text);

    }

    document.body.removeChild(textArea);

}


/* =========================================================
   NOTIFICATION
========================================================= */

function showNotification(message) {

    const notification = document.createElement("div");

    notification.textContent = message;

    notification.style.position = "fixed";
    notification.style.bottom = "90px";
    notification.style.left = "50%";
    notification.style.transform = "translateX(-50%)";

    notification.style.background = "#005C98";
    notification.style.color = "#FFFFFF";

    notification.style.padding = "11px 20px";

    notification.style.borderRadius = "6px";

    notification.style.fontSize = "13px";
    notification.style.fontWeight = "600";

    notification.style.zIndex = "3000";

    notification.style.boxShadow =
        "0 4px 15px rgba(0,0,0,0.25)";

    document.body.appendChild(notification);

    setTimeout(function() {

        notification.remove();

    }, 2200);

}


/* =========================================================
   MACHINE IMAGE FALLBACK
========================================================= */

function setupMachineImage() {

    const image = document.getElementById("machineImage");
    const fallback = document.getElementById("imageFallback");

    if (!image || !fallback) {
        return;
    }

    image.addEventListener("error", function() {

        image.style.display = "none";
        fallback.style.display = "flex";

    });

}


/* =========================================================
   REPORT MACHINE ISSUE
========================================================= */

function reportIssue() {

    alert(
        "Machine issue reporting will be connected later.\n\n" +
        "This button can later be linked to the maintenance / ERPNext system."
    );

}


/* =========================================================
   DOCUMENT PLACEHOLDER
========================================================= */

function documentNotAvailable(documentName) {

    alert(
        documentName +
        " will be connected here once the actual document is uploaded."
    );

}


/* =========================================================
   SIDEBAR LINK BEHAVIOR
========================================================= */

function setupNavigation() {

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {

        item.addEventListener("click", function() {

            navItems.forEach(function(nav) {
                nav.classList.remove("active");
            });

            item.classList.add("active");

            /*
                On mobile, close the sidebar after selection.
            */

            if (window.innerWidth <= 800) {

                document.body.classList.remove("mobile-menu-open");

            }

        });

    });

}


/* =========================================================
   WINDOW RESIZE
========================================================= */

window.addEventListener("resize", function() {

    /*
        Prevent mobile menu state from remaining active
        when switching back to desktop.
    */

    if (window.innerWidth > 800) {

        document.body.classList.remove("mobile-menu-open");

    }

});


/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function() {

    setupMachineImage();

    setupNavigation();

});