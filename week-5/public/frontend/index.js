let signupName = document.getElementById("signup-username");
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");
let createTodo = document.getElementById("create-todo");
let todoOuter = document.getElementById("todo");
let createTodoBtn=document.getElementById("create-todo-btn")
let isEditable=false;
let storeCurrentTodo;
let storeTodoId;

async function signupInfo() {
  let username = signupName.value;
  let email = signupEmail.value;
  let password = signupPassword.value;
  try {
    const response = await axios.post("http://localhost:3000/user/signup", {
      username,
      email,
      password,
    });
    if (response.status === 200) {
      signupName.value = "";
      signupEmail.value = "";
      signupPassword.value = "";
      alert("User signed up successfully");
      window.location.href = "/login";
    }
  } catch (error) {
    console.log(error);
  }
}

async function loginInfo() {
  let email = signupEmail.value;
  let password = signupPassword.value;
  try {
    const response = await axios.post("http://localhost:3000/user/login", {
      email,
      password,
    });
    if (response.status === 200) {
      signupEmail.value = "";
      signupPassword.value = "";
      alert("User login successfully");
      localStorage.setItem("token", response.data.token);
      window.location.href = "/todo";
    }
  } catch (error) {
    console.log(error);
  }
}

async function createTodos() {
  let token = localStorage.getItem("token");
 
  if(!isEditable){
    try {
      let response = await axios.post(
        "http://localhost:3000/todo/createTodo",
        {
          description: createTodo.value,
        },
        {
          headers: {
            token: token, // Send the token in the request headers
          },
        }
      );
      if (response.status === 201) {
        console.log(response);
        const newTodoId=response.data.newTodo._id;
        const outerdiv = document.createElement("div");
        outerdiv.classList.add("outer-todo");
  
        const div = document.createElement("div");
        div.classList.add("todo-list");
        div.innerHTML = createTodo.value;
  
        const todoBtnDiv = document.createElement("div");
        todoBtnDiv.classList.add("todo-btn-div");
  
        const editBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
        editBtn.classList.add("todo-btn");
        deleteBtn.classList.add("todo-btn");
  
        editBtn.innerHTML="Edit";
        deleteBtn.innerHTML="Delete";

        deleteBtn.setAttribute("data-id", newTodoId);
  
        todoBtnDiv.appendChild(editBtn);
        todoBtnDiv.appendChild(deleteBtn);
  
        outerdiv.appendChild(div);
        outerdiv.appendChild(todoBtnDiv);
  
        todoOuter.appendChild(outerdiv);
        createTodo.value="";
  
        editBtn.addEventListener("click",()=>{
          storeCurrentTodo=div;
          createTodo.value=storeCurrentTodo.innerText;
          isEditable=true
          createTodoBtn.innerText="Edit Todo";

        })
  
        deleteBtn.addEventListener("click",async (event)=>{
          const todoId = event.target.getAttribute("data-id");  // Get the specific todoId from the data-attribute
          console.log("Todo ID to delete:", todoId);
          const response=await axios.delete(`http://localhost:3000/todo/deleteTodo/${todoId}`,{
            todoId:todoId
          },{
            headers: {
              token: token, // Send the token in the request headers
            },
          });
          console.log(response);
          if(response.status == 200){
            const deleteTodo = event.target.parentElement.parentElement;
            deleteTodo.remove(); 
          }
          else{
            alert("Something went wrong")
          }
        })
      }
    } catch (error) {
      console.log("error",error);
      alert("Please Login First");
      createTodo.value = "";
      window.location.href = "/login";
    }
  }
  else if(isEditable){
    const todoId=storeTodoId;
    await axios.put("http://localhost:3000/todo/updateTodo",{
      todoId,
      description:createTodo.value
    },{
      headers: {
        token: token, // Send the token in the request headers
      },
    })
    storeCurrentTodo.innerHTML=createTodo.value;
    todo=createTodo.value
    isEditable=false;
    createTodo.value="";
    createTodoBtn.innerText="Create Todo";
    console.log("inside",todo);
  }
}
