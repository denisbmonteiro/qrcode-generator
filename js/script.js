//HTML Elements
const input = document.getElementById("txt_input");
const button = document.getElementById("btn_go");
const divQrCode = document.getElementById("div_qrcode");

//QR CODE Instance
var qrCode = new QRCode(divQrCode);

//Set de focus on the input after loading the page
input.focus();

//Create the event listeners for the page elements
button.addEventListener('click', generateQrCode);

input.addEventListener('blur', generateQrCode);

input.addEventListener('keyup', generateQrCode);

//Generate the new QR Code
function generateQrCode() {
    const value = input.value.trim();

    if (value != "") {
        qrCode.makeCode(value);
    } else {
        qrCode.makeCode("http://denisbm.com");
    }
}

//Run the function for the first time after the page loads
generateQrCode();