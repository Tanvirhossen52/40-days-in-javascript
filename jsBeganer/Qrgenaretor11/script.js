const qrText = document.querySelector(".qrtext");
const sizes = document.querySelector("#sizes");
const genarete = document.querySelector(".genarete");
const download = document.querySelector(".download");
const qrBody = document.querySelector("#qrbody");

let size = sizes.value;

genarete.addEventListener("click", (e) => {
  e.preventDefault();
  isEmpty();
});

sizes.addEventListener("change", (e) => {
  size = e.target.value;
  isEmpty();
});

download.addEventListener("click",()=>{
  let img = document.querySelector(".qrbody img");
   if (img !=null) {
    let imgAttr =img.getAttribute('src');
    download.setAttribute("href",imgAttr)
    
   }else{
    download.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`)

   }
})

function isEmpty() {
  if (qrText.value.length > 0) {
    genareteQrCode();
  } else {
    alert("plz enter your valid");
  }
}

function genareteQrCode() {
  qrBody.innerHTML = "";
  new QRCode(qrBody, {
    text: qrText.value,
    height: size,
    width: size,
    colorLight: "#fff",
    colorDark: "#000",
  });
}
