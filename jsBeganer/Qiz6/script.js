const startBtn = document.querySelector(".start-btn");

const role = document.querySelector(".roleContainer");
const question = document.querySelector(".questionContainer");
const exitbtn = document.querySelector(".buttons .exit-btn");
const continuebtn = document.querySelector(".buttons .continue-btn");
const container = document.querySelector(".container");
const nextbtn = document.querySelector(".n-btn");

startBtn.addEventListener("click", () => {
  role.classList.add("activeinfo");
  container.classList.add("activeinf");
});

exitbtn.addEventListener("click", () => {
  role.classList.remove("activeinfo");
  container.classList.remove("activeinf");
});

continuebtn.addEventListener("click", () => {
  question.classList.add("activein");

  showQ(0)
 
});

let count = 0 ;
nextbtn.addEventListener('click',()=>{
  if (count < questionArry.length -1) {
    count++

    showQ(count)
    
  }else{
    console.log("you win");
    
  }
})



function showQ(index) {
  const questiontitle = document.querySelector(".question-title");
  const answers = document.querySelector(".answers");
  const opTag =    `<button class="answerbtn"> ${questionArry[index].option[0]}</button>`
                   +`<button class="answerbtn" >${questionArry[index].option[1]}</button>`
                   +`<button class="answerbtn" >${questionArry[index].option[2]}</button>`
                   +`<button class="answerbtn" >${questionArry[index].option[3]}</button>`
    
      
    

    

 answers.innerHTML = opTag ;

 
 

 
  
   
   
    
  let qTag = "<span>" + questionArry[index].num +"." + questionArry[index].qeiz +
    "</span>";
  questiontitle.innerHTML = qTag;



;

    
 


}
