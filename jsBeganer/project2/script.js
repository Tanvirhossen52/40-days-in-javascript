const birthday = document.querySelector("#birthday")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")


function calculateAge() {
    const birthdayValue = birthday.value 
    if (birthdayValue === '') {

        alert("plz enter your brithday")
        
    } else{

      const age = getAge(birthdayValue)
      
      result.innerHTML = `your old is ${age}  ${age > 1 ? 'years':'year' } old`
        
    }
    
}


function getAge(birthdayValue) {
    const currentDate = new Date();
    const brithdaytDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - brithdaytDate.getFullYear();
    const month = currentDate.getMonth() - brithdaytDate.getMonth();

    if (month < 0 || month === 0 && currentDate.getDate() < brithdaytDate.getDate()) {
        age --;
    }

    
    return age;
    
    
    
    
    
}

btn.addEventListener('click',calculateAge)
