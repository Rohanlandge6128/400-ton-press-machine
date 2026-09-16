/* =========================================================
   PPPL VISUAL FACTORY
   Factory Map + 400 Ton Press Machine Dashboard
========================================================= */


/* =========================================================
   SIDEBAR
========================================================= */

function toggleSidebar() {
    document.body.classList.toggle("sidebar-collapsed");
}


/* =========================================================
   NAVIGATION
========================================================= */

function goHome() {

    const baseUrl =
        window.location.origin +
        window.location.pathname;

    window.location.href = baseUrl;
}


function goFactoryMap() {

    const baseUrl =
        window.location.origin +
        window.location.pathname;

    window.location.href = baseUrl;
}


/* =========================================================
   MACHINE POPUP
========================================================= */

function openMachinePopup() {

    const popup =
        document.getElementById("machinePopup");

    if (popup) {
        popup.classList.add("show");
    }
}


function closeMachinePopup() {

    const popup =
        document.getElementById("machinePopup");

    if (popup) {
        popup.classList.remove("show");
    }
}


/* =========================================================
   OPEN MACHINE DASHBOARD
========================================================= */

function openMachineDashboard() {

    closeMachinePopup();

    const dashboardUrl =
        window.location.origin +
        window.location.pathname +
        "?machine=21013";

    const dashboardTab =
        window.open(
            dashboardUrl,
            "_blank"
        );

    if (dashboardTab) {
        dashboardTab.focus();
    }
}


/* =========================================================
   PAGE LOADING
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


    if (machine === "21013") {

        if (factoryMapPage) {
            factoryMapPage.style.display =
                "none";
        }

        if (machinePopup) {
            machinePopup.classList.remove(
                "show"
            );
        }

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

        machineDashboardPage.innerHTML = "";
    }
}


/* =========================================================
   MACHINE DASHBOARD
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


            <!-- HERO INFORMATION -->

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


                    <div class="quick-info-row">

                        <span class="quick-info-label">
                            Machine
                        </span>

                        <strong>
                            Pneumatic Press (21013)
                        </strong>

                    </div>


                    <div class="quick-info-row">

                        <span class="quick-info-label">
                            Capacity
                        </span>

                        <strong>
                            400 Ton
                        </strong>

                    </div>


                    <div class="quick-info-row">

                        <span class="quick-info-label">
                            Make & Model
                        </span>

                        <strong>
                            SEW SXP-2-400
                        </strong>

                    </div>


                    <div class="quick-info-row">

                        <span class="quick-info-label">
                            Manufacturer
                        </span>

                        <strong>
                            SEW
                        </strong>

                    </div>


                    <div class="quick-info-row">

                        <span class="quick-info-label">
                            Serial No.
                        </span>

                        <strong>
                            9473/09/2016
                        </strong>

                    </div>


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

             PRIORITY:
             1. Machine Details
             2. Maintenance
             3. Documents
             4. Machine Financials
             5. Safety
             6. Current Production
             7. Contact
        ================================================== -->

        <div class="detail-grid">


            <!-- =================================================
                 1. MACHINE DETAILS
            ================================================== -->

            <section class="detail-card machine-details-card">

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
                                <i class="fa-solid fa-gauge-high"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    Press Type
                                </small>

                                <strong>
                                    Mechanical
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-arrows-up-down"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    Stroke Length
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
                                <i class="fa-solid fa-table-cells"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    Bed Size
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-square"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    Ram Size
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-grip-lines"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    T-Slots
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-arrows-left-right"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    T-Slot Dimension X
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-arrows-up-down"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    T-Slot Dimension Y
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-gauge"></i>
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
                                <i class="fa-solid fa-bolt"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    Motor Power
                                </small>

                                <strong>
                                    40 HP / To be updated kW
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-wind"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    Operating Pressure
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="spec-box">

                            <div class="spec-icon">
                                <i class="fa-solid fa-ruler-combined"></i>
                            </div>

                            <div class="spec-text">

                                <small>
                                    Die Space Dimensions
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <!-- =================================================
                 2. MAINTENANCE
            ================================================== -->

            <section class="detail-card maintenance-card">

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
                                Next preventive maintenance
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


                    <div class="maintenance-row">


                        <div>

                            <span class="field-label">
                                PM Cycle
                            </span>

                            <span class="field-value">
                                To be updated
                            </span>

                        </div>


                        <div>

                            <span class="field-label">
                                Warranty Date
                            </span>

                            <span class="field-value">
                                To be updated
                            </span>

                        </div>

                    </div>


                    <div class="maintenance-info-list">


                        <div class="maintenance-info-row">

                            <i class="fa-solid fa-clock-rotate-left"></i>

                            <div>

                                <span>
                                    Maintenance History
                                </span>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="maintenance-info-row">

                            <i class="fa-solid fa-triangle-exclamation"></i>

                            <div>

                                <span>
                                    Breakdown History
                                </span>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="maintenance-info-row">

                            <i class="fa-solid fa-droplet"></i>

                            <div>

                                <span>
                                    Lubrication Chart / Schedule
                                </span>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="maintenance-info-row">

                            <i class="fa-solid fa-user-gear"></i>

                            <div>

                                <span>
                                    Assigned Maintenance Technician
                                </span>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="maintenance-info-row">

                            <i class="fa-solid fa-phone"></i>

                            <div>

                                <span>
                                    Vendor / OEM Contact
                                </span>

                                <strong>
                                    +91 2827 252358 / +91 2827 253381
                                </strong>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <!-- =================================================
                 3. DOCUMENTS + COMPLIANCE
            ================================================== -->

            <section class="detail-card documents-card">

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
                            onclick="documentNotAvailable('User / Operation Manual')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                User / Operation Manual

                            </span>

                            <i class="fa-solid fa-chevron-right"></i>

                        </button>


                        <button
                            class="document-btn"
                            onclick="documentNotAvailable('Maintenance Manual')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Maintenance Manual

                            </span>

                            <i class="fa-solid fa-chevron-right"></i>

                        </button>


                        <button
                            class="document-btn"
                            onclick="documentNotAvailable('Electric / Hydraulic Safety Diagram')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Electric / Hydraulic Safety Diagram

                            </span>

                            <i class="fa-solid fa-chevron-right"></i>

                        </button>


                        <button
                            class="document-btn"
                            onclick="documentNotAvailable('Warranty Details')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Warranty Details

                            </span>

                            <i class="fa-solid fa-chevron-right"></i>

                        </button>


                        <button
                            class="document-btn full"
                            onclick="documentNotAvailable('Annual Maintenance Contract Details')"
                        >

                            <span>

                                <i class="fa-solid fa-file-pdf"></i>

                                Annual Maintenance Contract Details

                            </span>

                            <i class="fa-solid fa-chevron-right"></i>

                        </button>

                    </div>


                    <!-- COMPLIANCE -->

                    <div class="subsection-heading">

                        <i class="fa-solid fa-certificate"></i>

                        COMPLIANCE &amp; STATUTORY

                    </div>


                    <div class="compliance-grid">


                        <div class="compliance-item">

                            <span>
                                Factory License / Statutory Inspection
                            </span>

                            <strong>
                                To be updated
                            </strong>

                        </div>


                        <div class="compliance-item">

                            <span>
                                TPI Certificate &amp; Validity
                            </span>

                            <strong>
                                To be updated
                            </strong>

                        </div>


                        <div class="compliance-item">

                            <span>
                                Calibration Certificates
                            </span>

                            <strong>
                                To be updated
                            </strong>

                        </div>

                    </div>

                </div>

            </section>


            <!-- =================================================
                 4. MACHINE FINANCIALS
            ================================================== -->

            <section class="detail-card financial-card">

                <div class="detail-card-header">

                    <span class="card-icon">

                        <i class="fa-solid fa-indian-rupee-sign"></i>

                    </span>

                    MACHINE FINANCIALS

                </div>


                <div class="detail-card-body financial-body">


                    <div class="financial-placeholder">

                        <div class="financial-icon">

                            <i class="fa-solid fa-chart-line"></i>

                        </div>


                        <div>

                            <strong>
                                Financial Information
                            </strong>

                            <span>
                                To be updated
                            </span>

                        </div>

                    </div>

                </div>

            </section>


            <!-- =================================================
                 5. SAFETY
            ================================================== -->

            <section class="detail-card safety-card">

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

                                <i class="fa-solid fa-helmet-safety"></i>

                            </div>

                            <span>
                                Helmet
                            </span>

                        </div>


                        <div class="safety-item">

                            <div class="safety-circle">

                                <i class="fa-solid fa-glasses"></i>

                            </div>

                            <span>
                                Safety<br>
                                Glasses
                            </span>

                        </div>


                        <div class="safety-item">

                            <div class="safety-circle">

                                <i class="fa-solid fa-shoe-prints"></i>

                            </div>

                            <span>
                                Safety<br>
                                Shoes
                            </span>

                        </div>


                        <div class="safety-item">

                            <div class="safety-circle">

                                <i class="fa-solid fa-hand"></i>

                            </div>

                            <span>
                                Hand<br>
                                Protection
                            </span>

                        </div>


                        <div class="safety-item">

                            <div class="safety-circle">

                                <i class="fa-solid fa-headphones"></i>

                            </div>

                            <span>
                                Hearing<br>
                                Protection
                            </span>

                        </div>

                    </div>


                    <div class="safety-info-grid">


                        <div class="safety-info-box">

                            <i class="fa-solid fa-power-off"></i>

                            <div>

                                <small>
                                    Emergency Stop Procedure
                                </small>

                                <strong>
                                    To be updated
                                </strong>

                            </div>

                        </div>


                        <div class="safety-info-box">

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

                </div>

            </section>


            <!-- =================================================
                 6. CURRENT PRODUCTION
            ================================================== -->

            <section class="detail-card production-card">

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

                                <span class="field-value emphasis-text">
                                    JOB-2481
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


                            <div class="production-field">

                                <span class="field-label">
                                    Production Details
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

                                    1,248

                                    <small>
                                        / 1,500 pcs
                                    </small>

                                </div>


                                <div class="production-progress">

                                    <span style="width: 82%;"></span>

                                </div>


                                <span class="progress-percent">
                                    82%
                                </span>

                            </div>


                            <div class="production-bottom">


                                <div>

                                    <span class="field-label">
                                        Target
                                    </span>

                                    <strong>
                                        1,500 pcs
                                    </strong>

                                </div>


                                <div>

                                    <span class="field-label">
                                        OEE
                                    </span>

                                    <strong>
                                        82%
                                    </strong>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <!-- =================================================
                 7. CONTACT - ALWAYS LAST
            ================================================== -->

            <section class="detail-card contact-card">

                <div class="detail-card-header">

                    <span class="card-icon">

                        <i class="fa-solid fa-phone"></i>

                    </span>

                    CONTACT

                </div>


                <div class="detail-card-body contact-body">


                    <div class="contact-row">


                        <small>
                            Maintenance In-charge
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
                            EMERGENCY CONTACT NUMBER
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

    window.location.href = baseUrl;
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
   DOCUMENT PLACEHOLDER
========================================================= */

function documentNotAvailable(documentName) {

    alert(
        documentName +
        " will be added here when the document is available."
    );
}


/* =========================================================
   IMAGE FALLBACK
========================================================= */

function machineImageFallback(image) {

    image.style.display = "none";
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


    if (!overlay || !qrContainer) {
        return;
    }


    overlay.classList.add("show");


    const publicUrl =
        "https://rohanlandge6128.github.io/400-ton-press-machine/?machine=21013";


    qrContainer.innerHTML = "";


    if (typeof QRCode === "undefined") {

        const script =
            document.createElement("script");

        script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";


        script.onload = function () {

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
   CREATE QR CODE
========================================================= */

function createQRCode(
    container,
    url
) {

    container.innerHTML = "";


    new QRCode(
        container,
        {
            text: url,

            width: 210,

            height: 210,

            colorDark: "#005C98",

            colorLight: "#FFFFFF",

            correctLevel:
                QRCode.CorrectLevel.H
        }
    );
}


/* =========================================================
   HIDE QR
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
   CLOSE MACHINE POPUP BY CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const popup =
            document.getElementById(
                "machinePopup"
            );


        if (
            popup &&
            popup.classList.contains("show") &&
            event.target === popup
        ) {

            closeMachinePopup();

        }

    }
);


/* =========================================================
   CLOSE QR BY CLICKING OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        const overlay =
            document.getElementById(
                "qrOverlay"
            );


        if (
            overlay &&
            overlay.classList.contains("show") &&
            event.target === overlay
        ) {

            hideMachineQR();

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeMachinePopup();

            hideMachineQR();

        }

    }
);


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadPage();

    }
);