let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function clockRun() {
    let date = new Date();

    let hh =date.getHours();
    let mm =date.getMinutes();
    let ss =date.getSeconds();
    console.log(hh);
    

    let hRotaion = 30*hh + mm/2
    let mRotaion = 6*mm;
    let sRotaion = 6*ss;

    
    hr.style.transform =`rotate(${hRotaion}deg)`;
    min.style.transform =`rotate(${mRotaion}deg)`;
    sec.style.transform =`rotate(${sRotaion}deg)`;



    
}
setInterval(clockRun,1000);