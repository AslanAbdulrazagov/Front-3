
const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');


function addTodo() {
    const taskText = input.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('span');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.onclick = function() {
            todoList.removeChild(li);
        };

        li.appendChild(deleteButton);
        todoList.appendChild(li);
        input.value = "";
    }
}


addButton.addEventListener('click', addTodo);


input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});
