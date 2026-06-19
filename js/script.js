const input = document.getElementById("txt_input");
const button = document.getElementById("btn_go");
const divQrCode = document.getElementById("div_qrcode");

var qrCode = new QRCode(divQrCode);

input.focus();

button.addEventListener('click', generateQrCode);
input.addEventListener('blur', generateQrCode);
input.addEventListener('keyup', generateQrCode);

function generateQrCode() {
    const value = input.value.trim();

    if (value != "") {
        qrCode.makeCode(value);
    } else {
        qrCode.makeCode("https://denisbm.com");
    }
}

generateQrCode();