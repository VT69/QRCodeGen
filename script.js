document.getElementById("generate-button").addEventListener("click", function () {
    // Clear the previous QR code if it exists
    var qrcodeDiv = document.getElementById("qrcode");
    qrcodeDiv.innerHTML = '';

    var input = document.getElementById("url-input").value;
    if (input) {
        var qrCode = new QRCode(qrcodeDiv, {
            text: input,
            width: 200,
            height: 200,
        });
        document.getElementById("download-btn").disabled = false;
    } else {
        // Disable the download button if no input is provided
        document.getElementById("download-btn").disabled = true;
    }
});

document.getElementById("download-btn").addEventListener("click", function () {
    // Get the QR code image source
    var qrCodeImageSrc = document.getElementById("qrcode").getElementsByTagName('img')[0].src;

    // Create a temporary link element
    var downloadLink = document.createElement('a');

    // Set the href attribute to the QR code image source
    downloadLink.href = qrCodeImageSrc;

    // Set the download attribute with a desired file name
    downloadLink.download = 'qr-code.png';

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
});

// WhatsApp share functionality
document.getElementById("whatsapp-share-btn").addEventListener("click", function () {
    // Get the QR code image source
    var qrCodeImageSrc = document.getElementById("qrcode").getElementsByTagName('img')[0].src;

    // Create a shareable link
    var shareLink = encodeURIComponent(window.location.href);

    // Construct the WhatsApp share URL
    var whatsappShareURL = `https://wa.me/?text=${shareLink}`;

    // Open the WhatsApp share URL in a new tab
    window.open(whatsappShareURL, '_blank');
});
