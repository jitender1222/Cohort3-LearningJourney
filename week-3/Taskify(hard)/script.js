const todo=document.querySelector(".tasks");
const inputTodo=document.getElementById("inputTodo");
const todos=document.getElementById("todosList");
const addTodoBtn=document.querySelector(".addTodo");
let isEditing=false
let existingTodo=null;
console.log();

function addTodo(){
    if(inputTodo.value && !isEditing){
        const div=document.createElement("div");
        const p=document.createElement("p");

        const delBtn=document.createElement("button");
        const editBtn=document.createElement("button");

        div.setAttribute("id","listOfTodo");
        p.classList.add("tasks")

        p.innerHTML=inputTodo.value;
        inputTodo.value=""
        div.appendChild(p);

        delBtn.setAttribute("id","todoBtn"); 
        delBtn.addEventListener("click", deleteTodo);
        editBtn.setAttribute("id","todoBtn");
        editBtn.addEventListener('click',editTodo)

        delBtn.innerHTML="Delete";
        editBtn.innerHTML="Edit"
    
        div.appendChild(delBtn);        
        div.appendChild(editBtn);
        todos.appendChild(div);
    }
    else if (inputTodo.value && isEditing){
        existingTodo.innerHTML=inputTodo.value;
        isEditing=false;
        inputTodo.value="";
        existingTodo=null;
    }
    else{
        alert("First write some tasks")
    }
}

function deleteTodo(event){
    const deleteTodo=event.target.parentElement;
   todos.removeChild(deleteTodo);
   inputTodo.value=""
}

function editTodo(event){
    isEditing=true
    const todoItem = event.target.parentElement;
    const p = todoItem.querySelector("p"); // Get the <p> element
    existingTodo=p;
    inputTodo.value = p.innerHTML;
    addTodoBtn.innerHTML="Update Todo";
    console.log(existingTodo);
}