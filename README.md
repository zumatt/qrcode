# Free QR Code Generator
This reposiroty contains a free Qr Code generator based on the [kjua](https://github.com/lrsjng/kjua) library.
Using the connected page you can create for free a qr code in .png format with transparent background or download the .svg file.
### Settings changes
In order to modify the dimensions or the settings of the qr code you can fork this repo and change the settings on the file [assets/js/script.js](https://github.com/zumatt/qrcode/blob/main/assets/js/script.js).
```
var qrcode = kjua({
    render: 'image',            // here you can choose the kind of image to generate
    crisp: true,                // render pixel-perfect lines
    ecLevel: 'L',               // error correction level: 'L', 'M', 'Q' or 'H'
    size: 256,                  // size in pixels
    minVersion: 1,              // minimum version: 1..40
    text: elText.value,         // Use the value of the input element
    fill: '#000',               // QR code color
    back: 'rgba(0, 0, 0, 0)',   // background
});
```
for the full documentation please visit [https://larsjung.de/kjua/](https://larsjung.de/kjua/)
