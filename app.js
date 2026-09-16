/* =========================================================
   PPPL VISUAL FACTORY
   Factory Map + 400 Ton Press Machine Dashboard
========================================================= */


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {

    document.body.classList.toggle(
        "sidebar-collapsed"
    );

}


/* =========================================================
   NAVIGATION
========================================================= */

function goHome() {

    const baseUrl =
        window.location.origin +
        window.location.pathname;

    window.location.href =
        baseUrl;

}


function goFactoryMap() {

    const baseUrl =
        window.location.origin +
        window.location.pathname;

    window.location.href =
        baseUrl;

}


/* =========================================================
   MACHINE POPUP
========================================================= */

function openMachinePopup() {

    const popup =
        document.getElementById(
            "machinePopup"
        );

    if (!popup) {
        return;
    }

    popup.classList.add(
        "show"
    );

}


function closeMachinePopup() {

    const popup =
        document.getElementById(
            "machinePopup"
        );

    if (!popup) {
        return;
    }

    popup.classList.remove(
        "show"
    );

}


/* =========================================================
   OPEN 400 TON DASHBOARD
   P-05 → READ MORE → NEW TAB
========================================================= */

function openMachineDashboard() {

    /*
       Close the popup first.
    */

    closeMachinePopup();


    /*
       Build the dashboard URL.

       IMPORTANT:
       This uses the SAME index.html.

       ?machine=21013 tells app.js to
       display the existing 400 Ton dashboard.
    */

    const dashboardUrl =
        window.location.origin +
        window.location.pathname +
        "?machine=21013";


    /*
       Open the dashboard in a NEW TAB.
    */

    const dashboardTab =
        window.open(
            dashboardUrl,
            "_blank"
        );


    /*
       Focus new tab where browser permits it.
    */

    if (dashboardTab) {

        dashboardTab.focus();

    }

}


/* =========================================================
   LOAD CORRECT PAGE
========================================================= */

function loadPage() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const machine =
        params.get("machine");


    const factoryMapPage =
        document.getElementById(
            "factoryMapPage"
        );


    const machineDashboardPage =
        document.getElementById(
            "machineDashboardPage"
        );


    const machinePopup =
        document.getElementById(
            "machinePopup"
        );


    /*
       =====================================================
       400 TON PRESS MACHINE
       =====================================================
    */

    if (machine === "21013") {


        /*
           Hide Factory Map.
        */

        if (factoryMapPage) {

            factoryMapPage.style.display =
                "none";

        }


        /*
           Close popup.
        */

        if (machinePopup) {

            machinePopup.classList.remove(
                "show"
            );

        }


        /*
           Show Dashboard.
        */

        if (machineDashboardPage) {

            machineDashboardPage.style.display =
                "block";

            machineDashboardPage.classList.add(
                "active"
            );

            renderMachineDashboard();

        }


        return;

    }


    /*
       =====================================================
       FACTORY MAP
       =====================================================
    */

    if (factoryMapPage) {

        factoryMapPage.style.display =
            "block";

    }


    if (machineDashboardPage) {

        machineDashboardPage.style.display =
            "none";

        machineDashboardPage.classList.remove(
            "active"
        );

        machineDashboardPage.innerHTML =
            "";

    }

}


/* =========================================================
   RENDER 400 TON MACHINE DASHBOARD
========================================================= */

function renderMachineDashboard() {

    const container =
        document.getElementById(
            "machineDashboardPage"
        );


    if (!container) {
        return;
    }


    container.innerHTML = `


        <!-- =================================================
             HERO
        ================================================== -->

        <div class="detail-hero">


            <!-- =================================================
                 HERO LEFT
            ================================================== -->

            <div class="detail-hero-left">


                <div class="detail-title-row">


                    <button
                        class="detail-back"
                        onclick="goBackToFactoryMap()"
                        title="Back to Factory Map"
                    >

                        <i class="fa-solid fa-chevron-left"></i>

                    </button>


                    <h1 class="detail-title">
                        400 TON PRESS MACHINE
                    </h1>


                </div>


                <div class="detail-subtitle">

                    Asset ID: 21013
                    &nbsp;&nbsp;|&nbsp;&nbsp;
                    Mechanical Press

                </div>


                <!-- STATUS -->

                <div class="hero-status-row">


                    <div class="hero-running">


                        <div class="status-circle"></div>


                        <div class="hero-running-text">

                            <strong>
                                RUNNING
                            </strong>

                            <span>
                                Machine operational
                            </span>

                        </div>


                    </div>


                    <div class="hero-location">


                        <i class="fa-solid fa-location-dot"></i>


                        <div>

                            <strong>
                                Press Shop 56/11
                            </strong>

                            <span>
                                Machine 5 of 11
                            </span>

                        </div>


                    </div>


                </div>


                <!-- REPORT ISSUE -->

                <button
                    class="report-issue"
                    onclick="reportIssue()"
                >

                    <span>

                        <i class="fa-solid fa-triangle-exclamation"></i>

                        &nbsp;

                        Report Machine Issue

                    </span>


                    <i class="fa-solid fa-chevron-right"></i>

                </button>


            </div>



            <!-- =================================================
                 MACHINE IMAGE
            ================================================== -->

            <div class="detail-machine-image">


                <img
                    src="assets/machine-400-ton.jpg"
                    alt="400 Ton Press Machine"
                    onerror="machineImageFallback(this)"
                >


            </div>



            <!-- =================================================
                 QUICK INFO
            ================================================== -->

            <section class="quick-info-card">


                <div class="quick-info-header">


                    <span class="quick-info-icon">

                        <i class="fa-solid fa-circle-info"></i>

                    </span>


                    QUICK INFO


                </div>


                <div class="quick-info-body">


                    <!-- Machine -->

                    <div class="quick-info-row">


                        <span class="quick-info-label">
                            Machine
                        </span>


                        <strong>
                            Pneumatic Press (21013)
                        </strong>


                    </div>


                    <!-- Capacity -->

                    <div class="quick-info-row">


                        <span class="quick-info-label">
                            Capacity
                        </span>


                        <strong>
                            400 Ton
                        </strong>


                    </div>


                    <!-- Make & Model -->

                    <div class="quick-info-row">


                        <span class="quick-info-label">
                            Make & Model
                        </span>


                        <strong>
                            SEW SXP-2-400
                        </strong>


                    </div>


                    <!-- Manufacturer -->

                    <div class="quick-info-row">


                        <span class="quick-info-label">
                            Manufacturer
                        </span>


                        <strong>
                            SEW
                        </strong>


                    </div>


                    <!-- Serial Number -->

                    <div class="quick-info-row">


                        <span class="quick-info-label">
                            Serial No.
                        </span>


                        <strong>
                            9473/09/2016
                        </strong>


                    </div>


                    <!-- Location -->

                    <div class="quick-info-row">


                        <span class="quick-info-label">
                            Location
                        </span>


                        <strong>
                            Press Shop 56/11
                        </strong>


                    </div>


                </div>


            </section>


        </div>



        <!-- =================================================
             DETAIL GRID
        ================================================== -->

        <div class="detail-grid">


            <!-- =================================================
                 CURRENT PRODUCTION
            ================================================== -->

            <section class="detail-card">


                <div class="detail-card-header">


                    <span class="card-icon">

                        <i class="fa-solid fa-chart-simple"></i>

                    </span>


                    CURRENT PRODUCTION


                </div>


                <div class="detail-card-body">


                    <div class="production-body">


                        <div class="production-left">


                            <div class="production-field">


                                <span class="field-label">
                                    Job No.
                                </span>


                                <span class="field-value">
                                    To be updated
                                </span>


                            </div>


                            <div class="production-field">


                                <span class="field-label">
                                    Die No.
                                </span>


                                <span class="field-value">
                                    To be updated
                                </span>


                            </div>


                            <div class="production-field">


                                <span class="field-label">

                                    <i class="fa-solid fa-user"></i>

                                    &nbsp;

                                    Operator

                                </span>


                                <span class="field-value">
                                    To be updated
                                </span>


                            </div>


                        </div>


                        <div class="production-right">


                            <div class="production-count">


                                <span class="field-label">
                                    Production Count
                                </span>


                                <div class="production-number">

                                    0

                                    <small>
                                        / 0 pcs
                                    </small>

                                </div>


                                <div class="production-progress">

                                    <span></span>

                                </div>


                                <span class="progress-percent">
                                    0%
                                </span>


                            </div>


                            <div class="production-bottom">


                                <div>

                                    <span class="field-label">
                                        Target
                                    </span>


                                    <strong>
                                        To be updated
                                    </strong>

                                </div>


                                <div>

                                    <span class="field-label">
                                        OEE
                                    </span>


                                    <strong>
                                        To be updated
                                    </strong>

                                </div>


                            </div>


                        </div>


                    </div>


                </div>


            </section>



            <!-- =================================================
                 SAFETY
            ================================================== -->

            <section class="detail-card">


                <div class="detail-card-header">


                    <span class="card-icon">

                        <i class="fa-solid fa-shield-halved"></i>

                    </span>


                    SAFETY


                </div>


                <div class="detail-card-body">


                    <span class="field-label">
                        PPE REQUIRED
                    </span>


                    <div class="safety-icons">


                        <div class="safety-item">


                            <div class="safety-circle">

                                <i class="fa-solid fa-glasses"></i>

                            </div>


                            <span>
                                Safety<br>Glasses
                            </span>


                        </div>


                        <div class="safety-item">


                            <div class="safety-circle">

                                <i class="fa-solid fa-shoe-prints"></i>

                            </div>


                            <span>
                                Safety<br>Shoes
                            </span>


                        </div>


                        <div class="safety-item">


                            <div class="safety-circle">

                                <i class="fa-solid fa-hand"></i>

                            </div>


                            <span>
                                Hand<br>Protection
                            </span>


                        </div>


                        <div class="safety-item">


                            <div class="safety-circle">

                                <i class="fa-solid fa-headphones"></i>

                            </div>


                            <span>
                                Hearing<br>Protection
                            </span>


                        </div>


                    </div>


                    <div class="audit-box">


                        <i class="fa-regular fa-calendar-days"></i>


                        <div>


                            <small>
                                Last Safety Audit
                            </small>


                            <strong>
                                To be updated
                            </strong>


                        </div>


                    </div>


                </div>


            </section>



            <!-- =================================================
                 MAINTENANCE
            ================================================== -->

            <section class="detail-card">


                <div class="detail-card-header">


                    <span class="card-icon">

                        <i class="fa-solid fa-wrench"></i>

                    </span>


                    MAINTENANCE


                </div>


                <div class="detail-card-body">


                    <div class="next-pm">


                        <i class="fa-regular fa-calendar-days"></i>


                        <div>


                            <small>
                                NEXT PM
                            </small>


                            <strong>
                                October 2026
                            </strong>


                            <span>
                                Due date to be updated
                            </span>


                        </div>


                    </div>


                    <div class="maintenance-row">


                        <div>


                            <span class="field-label">
                                Last PM
                            </span>


                            <span class="field-value">
                                16 Jul 2026
                            </span>


                        </div>


                        <div>


                            <span class="field-label">
                                PM Frequency
                            </span>


                            <span class="field-value">
                                To be updated
                            </span>


                        </div>


                    </div>


                    <div class="pm-cycle">


                        <span class="field-label">
                            PM Cycle
                        </span>


                        <span class="field-value">
                            To be updated
                        </span>


                    </div>


                </div>


            </section>



            <!-- =================================================
                 MACHINE DETAILS
            ================================================== -->

            <section class="detail-card">


                <div class="detail-card-header">


                    <span class="card-icon">

                        <i class="fa-solid fa-gear"></i>

                    </span>


                    MACHINE DETAILS


                </div>


                <div class="detail-card-body">


                    <div class="machine-specs">


                        <div class="spec-box">


                            <div class="spec-icon">

                                <i class="fa-solid fa-arrows-up-down"></i>

                            </div>


                            <div class="spec-text">


                                <small>
                                    Stroke
                                </small>


                                <strong>
                                    300 mm
                                </strong>


                            </div>


                        </div>



                        <div class="spec-box">


                            <div class="spec-icon">

                                <i class="fa-solid fa-arrows-up-down"></i>

                            </div>


                            <div class="spec-text">


                                <small>
                                    Shut Height
                                </small>


                                <strong>
                                    600 mm
                                </strong>


                            </div>


                        </div>



                        <div class="spec-box">


                            <div class="spec-icon">

                                <i class="fa-solid fa-gauge-high"></i>

                            </div>


                            <div class="spec-text">


                                <small>
                                    Stroke Rate
                                </small>


                                <strong>
                                    25 SPM
                                </strong>


                            </div>


                        </div>



                        <div class="spec-box">


                            <div class="spec-icon">

                                <i class="fa-solid fa-microchip"></i>

                            </div>


                            <div class="spec-text">


                                <small>
                                    Motor Power
                                </small>


                                <strong>
                                    40 HP
                                </strong>


                            </div>


                        </div>


                    </div>


                </div>


            </section>



            <!-- =================================================
                 DOCUMENTS
            ================================================== -->

            <section class="detail-card">


                <div class="detail-card-header">


                    <span class="card-icon">

                        <i class="fa-solid fa-file-lines"></i>

                    </span>


                    DOCUMENTS


                </div>


                <div class="detail-card-body">


                    <div class="documents-grid">


                        <button
                            class="document-btn"
                            onclick="documentNotAvailable('Electrical Diagram')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Electrical Diagram

                            </span>


                            <i class="fa-solid fa-chevron-right"></i>

                        </button>



                        <button
                            class="document-btn"
                            onclick="documentNotAvailable('Hydraulic Circuit')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Hydraulic Circuit

                            </span>


                            <i class="fa-solid fa-chevron-right"></i>

                        </button>



                        <button
                            class="document-btn"
                            onclick="documentNotAvailable('Machine Manual')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Machine Manual

                            </span>


                            <i class="fa-solid fa-chevron-right"></i>

                        </button>



                        <button
                            class="document-btn"
                            onclick="documentNotAvailable('PM Checklist')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                PM Checklist

                            </span>


                            <i class="fa-solid fa-chevron-right"></i>

                        </button>



                        <button
                            class="document-btn full"
                            onclick="documentNotAvailable('Warranty Details')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Warranty Details

                            </span>


                            <i class="fa-solid fa-chevron-right"></i>

                        </button>


                    </div>


                </div>


            </section>



            <!-- =================================================
                 CONTACT
            ================================================== -->

            <section class="detail-card">


                <div class="detail-card-header">


                    <span class="card-icon">

                        <i class="fa-solid fa-phone"></i>

                    </span>


                    CONTACT


                </div>


                <div class="detail-card-body">


                    <div class="contact-row">


                        <small>
                            Maintenance Incharge
                        </small>


                        <strong>
                            Pramod
                        </strong>


                        <div class="contact-number">

                            <i class="fa-solid fa-phone"></i>

                            To be updated

                        </div>


                    </div>



                    <div class="contact-row">


                        <small>
                            Supplier / OEM Contact
                        </small>


                        <strong>
                            +91 2827 252358
                        </strong>


                        <div class="contact-number">

                            <i class="fa-solid fa-phone"></i>

                            +91 2827 253381

                        </div>


                    </div>



                    <div class="contact-row">


                        <small>
                            Warranty
                        </small>


                        <strong>
                            To be updated
                        </strong>


                    </div>


                </div>


            </section>


        </div>



        <!-- =================================================
             FLOATING QR
        ================================================== -->

        <button
            class="qr-floating"
            onclick="showMachineQR()"
            title="Machine QR"
        >

            <i class="fa-solid fa-qrcode"></i>

        </button>



        <!-- =================================================
             QR MODAL
        ================================================== -->

        <div
            class="qr-overlay"
            id="qrOverlay"
        >


            <div class="qr-modal">


                <h3>
                    400 TON PRESS MACHINE
                </h3>


                <p>
                    Scan this QR to open the machine dashboard.
                </p>


                <div id="generatedQRCode"></div>


                <br>


                <button
                    class="qr-close"
                    onclick="hideMachineQR()"
                >

                    Close

                </button>


            </div>


        </div>

    `;

}


/* =========================================================
   BACK TO FACTORY MAP
========================================================= */

function goBackToFactoryMap() {

    const baseUrl =
        window.location.origin +
        window.location.pathname;

    window.location.href =
        baseUrl;

}


/* =========================================================
   REPORT ISSUE
========================================================= */

function reportIssue() {

    alert(
        "Machine issue reporting will be connected in a future version."
    );

}


/* =========================================================
   DOCUMENTS
========================================================= */

function documentNotAvailable(
    documentName
) {

    alert(
        documentName +
        " will be added here when the document is available."
    );

}


/* =========================================================
   MACHINE IMAGE FALLBACK
========================================================= */

function machineImageFallback(
    image
) {

    image.style.display =
        "none";

}


/* =========================================================
   MACHINE QR
========================================================= */

function showMachineQR() {

    const overlay =
        document.getElementById(
            "qrOverlay"
        );


    const qrContainer =
        document.getElementById(
            "generatedQRCode"
        );


    if (
        !overlay ||
        !qrContainer
    ) {

        return;

    }


    overlay.classList.add(
        "show"
    );


    /*
       Public GitHub Pages URL
       for the 400 Ton dashboard.
    */

    const publicUrl =
        "https://rohanlandge6128.github.io/400-ton-press-machine/?machine=21013";


    qrContainer.innerHTML =
        "";


    /*
       Load QRCode library if necessary.
    */

    if (
        typeof QRCode ===
        "undefined"
    ) {


        const script =
            document.createElement(
                "script"
            );


        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";


        script.onload =
            function() {

                createQRCode(
                    qrContainer,
                    publicUrl
                );

            };


        document.head.appendChild(
            script
        );


    } else {


        createQRCode(
            qrContainer,
            publicUrl
        );


    }

}


/* =========================================================
   CREATE QR
========================================================= */

function createQRCode(
    container,
    url
) {

    container.innerHTML =
        "";


    new QRCode(
        container,
        {

            text:
                url,

            width:
                210,

            height:
                210,

            colorDark:
                "#005C98",

            colorLight:
                "#FFFFFF",

            correctLevel:
                QRCode.CorrectLevel.H

        }
    );

}


/* =========================================================
   CLOSE QR
========================================================= */

function hideMachineQR() {

    const overlay =
        document.getElementById(
            "qrOverlay"
        );


    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   CLICK OUTSIDE MACHINE POPUP
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const popup =
            document.getElementById(
                "machinePopup"
            );


        if (
            popup &&
            popup.classList.contains(
                "show"
            ) &&
            event.target === popup
        ) {

            closeMachinePopup();

        }

    }
);


/* =========================================================
   CLICK OUTSIDE QR
========================================================= */

document.addEventListener(
    "click",
    function(event) {

        const overlay =
            document.getElementById(
                "qrOverlay"
            );


        if (
            overlay &&
            overlay.classList.contains(
                "show"
            ) &&
            event.target === overlay
        ) {

            hideMachineQR();

        }

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key ===
            "Escape"
        ) {

            closeMachinePopup();

            hideMachineQR();

        }

    }
);


/* =========================================================
   PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadPage();

    }
);