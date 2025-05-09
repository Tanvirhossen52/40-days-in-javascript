
 const button1 = document.querySelector("#btn")



button1.addEventListener('click',BmiCalculate)

 



 function BmiCalculate() {
const Hight = document.querySelector("#Hight").value;
 const Weight = document.querySelector("#Weight").value;
 const Result = document.querySelector("#Result");
    if (!Hight || isNaN(Hight) || Hight<0 ) {
        Result.innerHTML ='plz provide the in valid value'
        return;

        
    }else if (!Weight || isNaN(Weight) || Weight<0) {
        Result.innerHTML ='plz provide the in valid value'
        return ;
    }

    const bmi = (Weight/((Hight*Hight)/10000)).toFixed(2);
  if (bmi < 18.88) {
     Result.innerHTML = `result:${bmi}low `
    
  }else if (bmi >=18.5 && bmi <24.9) {
     

    Result.innerHTML = `result:${bmi}normal `   
    
  }else if (bmi > 24.4 ) {
     

    Result.innerHTML = `result: ${bmi} high`

  }
    
 }
