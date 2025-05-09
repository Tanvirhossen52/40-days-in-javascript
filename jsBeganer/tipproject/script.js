const bill =document.getElementById('bill1')
const tip=document.getElementById('tip1')
const btn =document.getElementById('btn1')
const totalp =document.getElementById('totalp')


function calculte() {
    const ibill = bill.value;
    const itip = tip.value;
    const totaltip = ibill * ( 1 + itip / 100);

    totalp.innerText = totaltip.toFixed(2)


    
    
    
}

btn.addEventListener('click',calculte)
