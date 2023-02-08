let todos = [];
let input = document.querySelector('.todo__input');
let addBtn = document.querySelector('.todo__add');
let list = document.querySelector('.todo__list');

function addTask(text) {
    const todo = {
        text,
        done: false,
        id: `${Math.random()}`,
    }
    todos.push(todo);
};

function deleteTask(id) {
    todos.forEach(todo => {
        if (todo.id === id) {
            todo.done = true;
        }
    })
}

function render() {

    let html = '';
    todos.forEach(todo => {
        if (todo.done) {
            return;
        };

        html += `
            <div>
            <p>${todo.text}</p>
            <button data-id="${todo.id}" class="todo__delete"></button>
            </div>
        `;
    })
    list.innerHTML = html;
    input.value = '';
}

addBtn.addEventListener('click', () => {
    if (input.value !== '') {

        const text = input.value;

        addTask(text);

        render();
    }
})

list.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }
    const id = event.target.dataset.id;
    deleteTask(id);
    render();
})

render();