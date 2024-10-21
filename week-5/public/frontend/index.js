let signupName = document.getElementById("signup-username");
let signupEmail = document.getElementById("signup-email");
let signupPassword = document.getElementById("signup-password");
let createTodo = document.getElementById("create-todo");
let todoOuter = document.getElementById("todo");
console.log(todoOuter);

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
  let todo = createTodo.value;
  try {
    let response = await axios.post(
      "http://localhost:3000/todo/createTodo",
      {
        description: todo,
      },
      {
        headers: {
          token: token, // Send the token in the request headers
        },
      }
    );
    if (response.status === 201) {
      console.log(response);
      const outerdiv = document.createElement("div");
      outerdiv.classList.add("outer-todo");

      const div = document.createElement("div");
      div.classList.add("todo-list");
      div.innerHTML = todo;

      const todoBtnDiv = document.createElement("div");
      todoBtnDiv.classList.add("todo-btn-div");

      const editBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      editBtn.classList.add("todo-btn");
      deleteBtn.classList.add("todo-btn");

      editBtn.innerHTML="Edit";
      deleteBtn.innerHTML="Delete";

      todoBtnDiv.appendChild(editBtn);
      todoBtnDiv.appendChild(deleteBtn);

      outerdiv.appendChild(div);
      outerdiv.appendChild(todoBtnDiv);

      todoOuter.appendChild(outerdiv);
    }
  } catch (error) {
    console.log(error);
    alert(error.response.data.message + " " + "Please Login First");
    createTodo.value = "";
    window.location.href = "/login";
  }
}
