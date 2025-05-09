let inputSlder = document.querySelector(".inputSlder");
let sliyderValue = document.querySelector(".sliderValue");
let paasBox = document.querySelector("#paasBox");
let genbtn = document.querySelector(".genbtn");
let lowercase = document.querySelector("#lowercase");
let uppercase = document.querySelector("#uppercase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let copyicon = document.querySelector("#copyicon");

sliyderValue.textContent = inputSlder.value;

inputSlder.addEventListener("input", () => {
  sliyderValue.textContent = inputSlder.value;
});

genbtn.addEventListener("click", () => {
  paasBox.value = genartePasswd();
});

let lowercar = "abcdefghijklmnopqrstwxyz";
let upercar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumber = "123456789";
let allsymbols = "/*$%#@!";

function genartePasswd() {
  let genpaaswd = "";
  let allcars = "";

  allcars += lowercase.checked ? lowercar : "";
  allcars += uppercase.checked ? upercar : "";
  allcars += numbers.checked ? allnumber : "";
  allcars += symbols.checked ? allsymbols : "";

  for (let i = 1; i <= inputSlder.value; i++) {
    genpaaswd += allcars.charAt(Math.floor(Math.random() * allcars.length));
  }

  

  return genpaaswd;
}

copyicon.addEventListener('click',()=>{
    if (paasBox.value != 0 || paasBox.value.length >= 1) {
        
        navigator.clipboard.writeText(paasBox.value);
        copyicon.innerHTML = 'check_circle';
        copyicon.title ="paasword copied";
    }
    setTimeout(()=>{
        copyicon.innerHTML = 'file_copy';
        paasBox.value = "";

    },3000)
})


