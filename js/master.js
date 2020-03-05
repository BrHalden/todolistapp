function TodoItem(props) {
    return `
        <div class="todoitem">
            <button class="todoitem__description todoitem__completedtoggle">
                Go to the shops
            </button>
            <button class="todoitem__remove">
                Remove
            </button>
        </div>
    `;
}

function TodoListItem(props) {
    return `
        <li class="todolist__item">
            ${TodoItem(props)}
        </li>
    `;
}

function TodoList(props) {
    return `
        <ul class="todolist">
            ${TodoListItem(props)}
        </ul>
    `;
}

function TodoAddForm(props) {
    return `
        <form class="todoaddform">
            <input type="text" name="todoItemDescription" placeholder="Enter a task..."
                class="todoaddform__description" />
            <button type="submit" class="todoaddform__submit">
                Add
            </button>
        </form>
    `;
}

function App(props) {
    return `
        <header class="mainheader">
            <h1 class="pagetitle">To-do list</h1>
        </header>
        <main>
            ${TodoAddForm(props)}

            ${TodoList(props)}
        </main>
        <footer class="mainfooter">
            Noroff &copy; 2020
        </footer>
    `;
}

document.body.innerHTML = App({});