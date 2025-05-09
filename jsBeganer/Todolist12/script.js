const inputText = document.getElementById("inputText");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let addtodo = null;


  

const addto = ()=>{

    
 const inputT = inputText.value.trim();
    if (inputT.length <= 0 ) {  
        return false   
    }

    if (addBtn.value ==="Edit") {
        addtodo.target.previousElementSibling.innerHTML =inputT;
        addBtn.value = 'Add';
        inputText.value =''; 
        
    }
else{
    const li =document.createElement("li");
    const p =document.createElement("p");

    
    p.innerHTML =inputT;
    li.appendChild(p);
    todoList.appendChild(li);


    const editBtn =document.createElement("button")
     editBtn.classList.add('btn','edit')
     editBtn.innerHTML="Edit"
     li.appendChild(editBtn)
    inputText.value = "";


    // remove button
    const removeBtn =document.createElement("button")
    removeBtn.classList.add('btn','remove');
    removeBtn.innerHTML="Remove";
    li.appendChild(removeBtn)

    localstr(inputT)

}


}

const updatetodo =(e)=>{
    if (e.target.innerHTML === 'Remove') {


        todoList.removeChild(e.target.parentElement);
        
    };
    
    if (e.target.innerHTML === 'Edit') {
        inputText.value = e.target.previousElementSibling.innerHTML;
        inputText.focus();
        addBtn.value ='Edit'
        addtodo = e;      
        
    }
}


const localstr =(todo)=>{
    let todos =[];
    if (localStorage.getItem("todot") === null) {
        let todos =[];   
        
    }else{
       todos = JSON.parse(localStorage.getItem("todot"))
    }
    todos.push(todo);
    localStorage.setItem("todot",JSON.stringify(todos))

}

const alwaysshow = ()=>{

    if (localStorage.getItem("todot") === null) {
        let todos =[];   
        
    }else{
       todos = JSON.parse(localStorage.getItem("todot"))
    }
    todos.forEach(todo => {

        const li =document.createElement("li");
        const p =document.createElement("p");
    
        
        p.innerHTML =todo;
        li.appendChild(p);
        todoList.appendChild(li);
    
    
        const editBtn =document.createElement("button")
         editBtn.classList.add('btn','edit')
         editBtn.innerHTML="Edit"
         li.appendChild(editBtn)
        inputText.value = "";
    
    
        // remove button
        const removeBtn =document.createElement("button")
        removeBtn.classList.add('btn','remove');
        removeBtn.innerHTML="Remove";
        li.appendChild(removeBtn)
        
    });

}
document.addEventListener("DOMContentLoaded",alwaysshow)
todoList.addEventListener('click',updatetodo)
addBtn.addEventListener("click", addto)