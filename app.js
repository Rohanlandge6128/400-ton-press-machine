/* =========================================================
   PPPL VISUAL FACTORY
   400 TON PRESS MACHINE
   ========================================================= */


/* =========================================================
   SIDEBAR TOGGLE
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
       Clear previous QR
    */
    const context = canvas.getContext("2d");

    if (context) {
        context.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );
    }


    /*
       Generate QR using current page URL.

       When hosted on GitHub Pages, this automatically
       becomes the public dashboard URL.
    */

    if (typeof QRCode !== "undefined") {

        QRCode.toCanvas(
            canvas,
            window.location.href,
            {
                width: 240,
                margin: 2
            },
            function(error) {

                if (error) {
                    console.error(
                        "QR generation error:",
                        error
                    );
                }

            }
        );

    } else {

        console.error(
            "QRCode library was not loaded."
        );

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
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", function(event) {

    const modal = document.getElementById("qrModal");

    if (!modal) {
        return;
    }

    if (
        event.target === modal &&
        modal.classList.contains("show")
    ) {
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

        navigator.clipboard
            .writeText(url)
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

    const textArea =
        document.createElement("textarea");

    textArea.value = text;

    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";

    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    try {

        document.execCommand("copy");

        showNotification(
            "Dashboard URL copied"
        );

    } catch (error) {

        console.error(
            "Unable to copy URL:",
            error
        );

    }

    document.body.removeChild(textArea);
}


/* =========================================================
   TEMPORARY NOTIFICATION
   ========================================================= */

function showNotification(message) {

    const existing =
        document.getElementById(
            "dashboardNotification"
        );

    if (existing) {
        existing.remove();
    }


    const notification =
        document.createElement("div");

    notification.id =
        "dashboardNotification";

    notification.textContent =
        message;


    notification.style.position =
        "fixed";

    notification.style.bottom =
        "90px";

    notification.style.left =
        "50%";

    notification.style.transform =
        "translateX(-50%)";

    notification.style.background =
        "#005C98";

    notification.style.color =
        "#FFFFFF";

    notification.style.padding =
        "11px 18px";

    notification.style.borderRadius =
        "5px";

    notification.style.fontSize =
        "13px";

    notification.style.fontWeight =
        "600";

    notification.style.zIndex =
        "3000";

    notification.style.boxShadow =
        "0 4px 15px rgba(0,0,0,0.2)";


    document.body.appendChild(
        notification
    );


    setTimeout(function() {

        notification.remove();

    }, 2200);
}


/* =========================================================
   MACHINE IMAGE FALLBACK
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const machineImage =
            document.getElementById(
                "machineImage"
            );

        if (machineImage) {

            machineImage.addEventListener(
                "error",
                function() {

                    /*
                       If JPG cannot be loaded,
                       show a clean fallback.
                    */

                    machineImage.style.display =
                        "none";

                    const container =
                        machineImage.parentElement;

                    if (container) {

                        container.innerHTML = `
                            <div style="
                                width:100%;
                                height:100%;
                                min-height:260px;
                                display:flex;
                                align-items:center;
                                justify-content:center;
                                flex-direction:column;
                                color:#005C98;
                                background:#EAF6FA;
                                border-radius:5px;
                            ">
                                <i class="fa-solid fa-industry"
                                   style="
                                   font-size:58px;
                                   margin-bottom:12px;
                                   ">
                                </i>

                                <strong style="
                                    font-size:18px;
                                ">
                                    400T
                                </strong>

                                <span style="
                                    font-size:12px;
                                    margin-top:4px;
                                ">
                                    Machine Image
                                </span>
                            </div>
                        `;
                    }

                }
            );

        }


        /*
           Close sidebar navigation on mobile
           after clicking a navigation item.
        */

        const navItems =
            document.querySelectorAll(
                ".nav-item"
            );

        navItems.forEach(function(item) {

            item.addEventListener(
                "click",
                function() {

                    if (
                        window.innerWidth <= 800
                    ) {

                        document.body.classList.add(
                            "sidebar-collapsed"
                        );

                    }

                }
            );

        });

    }
);


/* =========================================================
   REPORT MACHINE ISSUE
   ========================================================= */

function reportIssue() {

    alert(
        "Machine issue reporting will be connected in the next version."
    );

}


/* =========================================================
   DOCUMENT PLACEHOLDER
   ========================================================= */

function documentNotAvailable(documentName) {

    alert(
        documentName +
        " will be added when the actual document is uploaded."
    );

}


/* =========================================================
   UPDATE TIME
   ========================================================= */

function updateLastUpdatedTime() {

    const element =
        document.getElementById(
            "lastUpdated"
        );

    if (!element) {
        return;
    }

    /*
       Keep the reference dashboard time
       for the current static version.

       This can later be connected to
       real ERPNext/live machine data.
    */

}


/* =========================================================
   INITIALIZATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateLastUpdatedTime();

    }
);