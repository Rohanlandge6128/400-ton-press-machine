/* =========================================================
   PPPL VISUAL FACTORY
   400 TON PRESS MACHINE DASHBOARD
   app.js
   ========================================================= */


/* =========================================================
   SIDEBAR
   ========================================================= */

function toggleSidebar() {

    const sidebar = document.getElementById("sidebar");

    if (!sidebar) {
        return;
    }

    sidebar.classList.toggle("open");

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
        window.location.href automatically uses the
        current dashboard URL.

        This means when the dashboard is hosted on
        GitHub Pages, the QR will contain the public
        GitHub Pages URL.
    */

    if (typeof QRCode === "undefined") {

        console.error("QR Code library not loaded.");

        return;

    }


    QRCode.toCanvas(

        canvas,

        window.location.href,

        {
            width: 260,
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

}


/* =========================================================
   CLOSE QR MODAL
   ========================================================= */

function hideModal() {

    const modal =
        document.getElementById("qrModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

}


/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById("qrModal");

        if (!modal) {
            return;
        }


        if (
            event.target === modal
        ) {

            hideModal();

        }

    }
);


/* =========================================================
   COPY DASHBOARD URL
   ========================================================= */

function copyPageURL() {

    const url =
        window.location.href;


    if (
        navigator.clipboard &&
        window.isSecureContext
    ) {

        navigator.clipboard
            .writeText(url)
            .then(function() {

                showTemporaryMessage(
                    "Dashboard URL copied!"
                );

            })
            .catch(function() {

                fallbackCopyURL(url);

            });

    } else {

        fallbackCopyURL(url);

    }

}


/* =========================================================
   FALLBACK COPY METHOD
   ========================================================= */

function fallbackCopyURL(url) {

    const textArea =
        document.createElement("textarea");


    textArea.value = url;

    textArea.style.position =
        "fixed";

    textArea.style.left =
        "-999999px";


    document.body.appendChild(
        textArea
    );


    textArea.focus();

    textArea.select();


    try {

        document.execCommand("copy");

        showTemporaryMessage(
            "Dashboard URL copied!"
        );

    } catch (error) {

        alert(
            "Copy failed. Please copy the URL from the browser."
        );

    }


    document.body.removeChild(
        textArea
    );

}


/* =========================================================
   TEMPORARY MESSAGE
   ========================================================= */

function showTemporaryMessage(message) {

    const existing =
        document.getElementById(
            "temporaryMessage"
        );


    if (existing) {

        existing.remove();

    }


    const notification =
        document.createElement("div");


    notification.id =
        "temporaryMessage";


    notification.textContent =
        message;


    notification.style.position =
        "fixed";


    notification.style.left =
        "50%";


    notification.style.bottom =
        "30px";


    notification.style.transform =
        "translateX(-50%)";


    notification.style.background =
        "#005C98";


    notification.style.color =
        "#ffffff";


    notification.style.padding =
        "12px 20px";


    notification.style.borderRadius =
        "7px";


    notification.style.fontSize =
        "14px";


    notification.style.fontWeight =
        "600";


    notification.style.zIndex =
        "5000";


    notification.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.25)";


    document.body.appendChild(
        notification
    );


    setTimeout(
        function() {

            notification.remove();

        },
        2200
    );

}


/* =========================================================
   MACHINE IMAGE FALLBACK
   ========================================================= */

function showMachinePlaceholder() {

    const image =
        document.querySelector(
            ".machine-photo"
        );


    const placeholder =
        document.getElementById(
            "machinePlaceholder"
        );


    if (image) {

        image.style.display =
            "none";

    }


    if (placeholder) {

        placeholder.style.display =
            "flex";

    }

}


/* =========================================================
   INITIAL MACHINE IMAGE CHECK
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const image =
            document.querySelector(
                ".machine-photo"
            );


        const placeholder =
            document.getElementById(
                "machinePlaceholder"
            );


        if (!image) {
            return;
        }


        /*
            If the actual machine image exists,
            hide the placeholder.
        */

        image.addEventListener(
            "load",
            function() {

                image.style.display =
                    "block";


                if (placeholder) {

                    placeholder.style.display =
                        "none";

                }

            }
        );


        /*
            If image doesn't exist,
            show placeholder.
        */

        image.addEventListener(
            "error",
            function() {

                showMachinePlaceholder();

            }
        );


        /*
            In case the image is already cached.
        */

        if (image.complete) {

            if (image.naturalWidth === 0) {

                showMachinePlaceholder();

            } else {

                image.style.display =
                    "block";


                if (placeholder) {

                    placeholder.style.display =
                        "none";

                }

            }

        }

    }
);


/* =========================================================
   REPORT MACHINE ISSUE
   ========================================================= */

function reportIssue() {

    /*
        This is currently only a placeholder.

        Later we can connect this button to:

        - WhatsApp
        - Email
        - Google Form
        - ERPNext
        - Maintenance ticket
        - Internal notification system
    */


    alert(
        "Machine issue reporting will be connected later."
    );

}


/* =========================================================
   DOCUMENT PLACEHOLDER
   ========================================================= */

function documentNotAvailable(event) {

    event.preventDefault();


    showTemporaryMessage(
        "Document will be added later."
    );

}


/* =========================================================
   CLOSE SIDEBAR AFTER MOBILE NAVIGATION
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const sidebarLinks =
            document.querySelectorAll(
                ".sidebar-link"
            );


        sidebarLinks.forEach(
            function(link) {

                link.addEventListener(
                    "click",
                    function() {

                        if (
                            window.innerWidth <= 800
                        ) {

                            const sidebar =
                                document.getElementById(
                                    "sidebar"
                                );


                            if (sidebar) {

                                sidebar.classList.remove(
                                    "open"
                                );

                            }

                        }

                    }
                );

            }
        );

    }
);


/* =========================================================
   UPDATE LAST UPDATED TIME
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
        For now we keep the displayed date
        static because this is a design stage.

        Later this can come from:
        ERPNext / API / database / IoT data.
    */

}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateLastUpdatedTime();

    }
);