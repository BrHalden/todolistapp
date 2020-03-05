const data = {
    title: "Todo list",
    year: (new Date()).getFullYear(),
    todo: {
        items: [{
            // Randomly generated UUID
            "id": "123e4567-e89b-12d3-a456-426655440000",
            // the text the user entered
            "description": "Go to the shop",
            // boolean – defaults to false
            "isCompleted": true,
        },{
            // Randomly generated UUID
            "id": "123e4567-e89b-12d3-a456-426655440000",
            // the text the user entered
            "description": "Test item 2",
            // boolean – defaults to false
            "isCompleted": false,
        },{
            // Randomly generated UUID
            "id": "123e4567-e89b-12d3-a456-426655440000",
            // the text the user entered
            "description": "Test item 3",
            // boolean – defaults to false
            "isCompleted": true,
        }]
    }
};

// get the root element
const rootElem = document.getElementById("root");
// render app with our data
rootElem.innerHTML = App(data);

function TodoItem(props) {
    // add completed class name if the task is completed
    const className = "todoitem" 
        + (props.isCompleted ? " todoitem--completed" : "");
    
    return `
        <div class="${className}" data-taskid="${props.id}">
            <button class="todoitem__description todoitem__completedtoggle"
                data-toggleid="${props.id}">
                ${props.description}
            </button>
            <button class="todoitem__remove" data-removeid="${props.id}">
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
            ${
                // render TodoListItem component for each item
                props.items.map(function(todoItem) {
                    return TodoListItem(todoItem);
                })
                .join("")
            }
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
            <h1 class="pagetitle">${props.title}</h1>
        </header>
        <main>
            ${TodoAddForm(props)}

            ${TodoList(props.todo)}
        </main> 
        <footer class="mainfooter">
            Noroff &copy; ${props.year}
        </footer>
    `;
}