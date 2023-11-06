const qrCode = document.getElementById("qrCode");
const qrImage = document.getElementById("qrImage");
const btn = document.querySelector(".btn");
const qrText = document.getElementById("qrText");

function generateQr () {
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        qrCode.classList.add("show-img");
    } else {
        setTimeout(() => {
            qrText.classList.add("error");
        }, 1000);
    }
}

btn.addEventListener("click", generateQr);