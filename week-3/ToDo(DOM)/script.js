const input = document.getElementById("input");
const addTodoBtn = document.getElementById("btn");
const inputField = document.querySelector(".inputField");
const innerDiv = document.getElementById("inner-div");

let isEditing = false; // Flag to check if editing is in progress
let todoBeingEdited = null; // To store the reference of the todo being edited

addTodoBtn.addEventListener("click", function () {
    if (inputField.value) {
        if (isEditing && todoBeingEdited) {
            // If editing, update the existing todo
            const p = todoBeingEdited.querySelector("p");
            p.innerHTML = inputField.value; // Update the todo description
            inputField.value = ""; // Clear input field
            addTodoBtn.innerHTML = "Add Todo"; // Reset button to add mode
            isEditing = false; // Reset editing flag
            todoBeingEdited = null; // Clear the reference
        } else {
            // If not editing, add a new todo
            let newTodo = document.createElement("div");
            newTodo.classList.add("todo");

            const p = document.createElement("p");
            p.classList.add("todoDesc");
            newTodo.appendChild(p);
            p.innerHTML = inputField.value;

            const editButton = document.createElement("button");
            editButton.setAttribute("id", "editBtn");
            editButton.innerHTML = "Edit Todo";

            const delButton = document.createElement("button");
            delButton.setAttribute("id", "delBtn");
            delButton.innerHTML = "Delete Todo";

            // Append buttons to the new todo div
            newTodo.appendChild(editButton);
            newTodo.appendChild(delButton);

            innerDiv.appendChild(newTodo);
            inputField.value = "";

            // Delete functionality
            delButton.addEventListener("click", function () {
                newTodo.remove();
            });

            // Edit functionality
            editButton.addEventListener("click", function () {
                inputField.value = p.innerHTML; // Set the input field to the todo text
                addTodoBtn.innerHTML = "Update Todo"; // Change button text to "Update Todo"
                isEditing = true; // Set editing mode
                todoBeingEdited = newTodo; // Store reference to the current todo being edited
                console.log(newTodo);
            });
        }
    } else {
        alert("Enter a value first");
    }
});
