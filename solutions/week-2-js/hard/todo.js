/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

let todos=[];
class Todo {

    add(id,desc){
        todos.push({
            id:id,
            desc:desc
        });
    }
    remove(id){
        let newTodo= todos.filter((todo)=> todo.id !== id );
        todos=[];
        todos=newTodo;
    }
    update(id,text){
        todos.forEach((todo) => {
            if(todo.id == id){
                todo.desc=text;
            }
        })
    }
    getAll(){
        return todos;
    }
    clear(){
        todos=[];
    }
    getIndex(id){
        const foundTodo = todos.find(todo => todo.id == id);
        return foundTodo ? foundTodo.desc : ""
    }
}

const todo=new Todo;
todo.add(1,"hi first todo");
todo.add(2,"hi 2nd todo");
todo.add(3,"hi 3rd todo");
todo.add(4,"hi 4th todo");
console.log(todo.getAll());
console.log(todo.getIndex(2));