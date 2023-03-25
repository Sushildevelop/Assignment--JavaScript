let todoList = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");

    const todoListElement = document.getElementById("todo-list");

    if (todoInput.value !== "") {
        const todoItem = {
            id: Date.now(),
            value: todoInput.value,
            done: false
        };



        todoList.push(todoItem);


        todoListElement.innerHTML += `<li id="${todoItem.id}">${todoItem.value}</li>`;

        todoInput.value = "";
    }
}