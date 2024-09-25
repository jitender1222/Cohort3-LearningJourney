const todo=document.querySelector(".tasks");
const inputTodo=document.getElementById("inputTodo");
const listOfTodo=document.getElementById("listOfTodo");
const todos=document.getElementById("todosList");

function addTodo(){
    if(inputTodo.value){
        const div=document.createElement("div");
        const p=document.createElement("p");
        const delBtn=document.createElement("button");
        const editBtn=document.createElement("button");
        div.setAttribute("id","listOfTodo");
        p.classList.add("tasks")
        p.innerHTML=inputTodo.value;
        div.appendChild(p);
        delBtn.setAttribute("id","todoBtn"); 
        delBtn.addEventListener("click", deleteTodo);
        editBtn.setAttribute("id","todoBtn");
        delBtn.innerHTML="Delete";
        editBtn.innerHTML="Edit"
        div.appendChild(delBtn);        
        div.appendChild(editBtn);
        todos.appendChild(div);
    }
    else{
        alert("First write some tasks")
    }
}

function deleteTodo(){
    console.log("hello");
    console.log(typeof(listOfTodo));
//    todos.removeChild(listOfTodo);
}

function editTodo(){
    console.log("editTOdo");
}