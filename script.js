const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const res = document.querySelector('#res');




btn.addEventListener('click' , AddTodoHandler);

todos = [];
function AddTodoHandler (){
    let val = input.value;
    input.value = '';

    todos.push(val);


    addTodo(); 
}

function addTodo() {
    for (const todo of todos) {
        value = todo;
    }

    res.innerHTML += `
    <li>${value}</li>
    `;
}

