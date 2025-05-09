let disply = document.getElementById('display');
let buttons = document.querySelectorAll('button');
 let buttonArry = Array.from(buttons);

 let string = ''

 buttonArry.forEach((btn)=>{
 btn.addEventListener('click',(e)=>{

    if (e.target.innerHTML == "DEL") {
        string = string.substring(0, string.length-1);
        disply.value = string;
        
    }else if(e.target.innerHTML == "AC"){
        string = '';
        disply.value = string;

    }else if(e.target.innerHTML == "="){
        string = eval(string);
        disply.value = string;
     }else{
        string += e.target.innerHTML;
        disply.value = string;
    }
  
  
 })
  
 })

