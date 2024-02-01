var elText = document.getElementById("text");
var downloadLink = document.getElementById("downloadLink");

// Create a transparent QR code using kjua
var qrcode = kjua({
    render: 'image',
    crisp: true,
    ecLevel: 'L',
    size: 256,
    minVersion: 1,
    text: elText.value, // Use the value of the input element
    fill: '#000', // QR code color
    back: 'rgba(0, 0, 0, 0)', // Transparent background
});

var svg_qrcode = kjua({
    render: 'svg',
    crisp: true,
    ecLevel: 'L',
    size: 256,
    minVersion: 1,
    text: elText.value, // Use the value of the input element
    fill: '#000', // QR code color
    back: 'rgba(0, 0, 0, 0)', // Transparent background
});

// Append the generated QR code to the "qrcode" div
document.getElementById('qrcode').appendChild(qrcode);
document.getElementById('svgQr').appendChild(svg_qrcode);

// Function to update the QR code with the new value
function updateQRCode() {
    var qrcode = kjua({
        render: 'image',
        crisp: true,
        ecLevel: 'L',
        size: 256,
        minVersion: 1,
        text: elText.value, // Use the value of the input element
        fill: '#000', // QR code color
        back: 'rgba(0, 0, 0, 0)', // Transparent background
        });

    var svg_qrcode = kjua({
        render: 'svg',
        crisp: true,
        ecLevel: 'L',
        size: 256,
        minVersion: 1,
        text: elText.value, // Use the value of the input element
        fill: '#000', // QR code color
        back: 'rgba(0, 0, 0, 0)', // Transparent background
    });

    Array.prototype.forEach.call(document.getElementById("qrcode").childNodes, function (child) {
        document.getElementById("qrcode").removeChild(child);
    });
    Array.prototype.forEach.call(document.getElementById('svgQr').childNodes, function (child) {
        document.getElementById('svgQr').removeChild(child);
    });
    if (qrcode) {
        document.getElementById("qrcode").appendChild(qrcode);
        document.getElementById('svgQr').appendChild(svg_qrcode);
    }
}

// Attach an input event listener to the input element
elText.addEventListener('input', updateQRCode);

var svg = document.getElementById("svgQr");

downloadLink.addEventListener("click", function() {
    var svgData = new XMLSerializer().serializeToString(svg);
    var cleanedSvgData = svgData.replace('<div xmlns="http://www.w3.org/1999/xhtml" id="svgQr">', '').replace('</div>', '').replace('<rect x="0" y="0" width="256" height="256" fill="rgba(0, 0, 0, 0)"/>', '');
    var blob = new Blob([cleanedSvgData], { type: "image/svg+xml" });
    var url = URL.createObjectURL(blob);

    downloadLink.href = url;
});