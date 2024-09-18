const input=document.getElementById("input");
const  addTodoBtn=document.getElementById("btn");
const inputField=document.querySelector(".inputField");
const innerDiv= document.getElementById("inner-div");
addTodoBtn.addEventListener("click",function(){
    if(inputField.value){
        
        let newTodo=document.createElement("div");
        newTodo.classList.add("todo");

        const p=document.createElement("p");
        p.classList.add("todoDesc")
        newTodo.appendChild(p);
        p.innerHTML=inputField.value

        const editButton=document.createElement("button");
        editButton.setAttribute("id","btn")
        editButton.innerHTML="Edit Todo"

        const delButton=document.createElement("button");
        delButton.setAttribute("id","btn")
        delButton.setAttribute("class","delBTn");
        delButton.innerHTML="Delete Todo"

        p.appendChild(editButton);
        p.appendChild(delButton)

        innerDiv.appendChild(newTodo)
        inputField.value="";

        delButton.addEventListener("click",function(){
            newTodo.parentNode.removeChild(newTodo);
        })
    }
    else{
        alert("Eneter value first")
    }
})

const delBtn=document.querySelector(".delBTn");