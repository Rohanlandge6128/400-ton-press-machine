function showQR() {

    const modal = document.getElementById("modal");

    modal.classList.add("show");

    QRCode.toCanvas(
        document.getElementById("qrCanvas"),
        window.location.href,
        {
            width: 260,
            margin: 2
        },
        function(error) {

            if (error) {
                console.error(error);
            }

        }
    );
}


function hideModal() {

    document
        .getElementById("modal")
        .classList
        .remove("show");

}