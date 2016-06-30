import yo from 'yo-yo';
import {observable, autorun, action} from "mobx";

class AppState {
    static ALL = todo => todo;
    static ACTIVE = todo => !todo.completed;
    static COMPLETED = todo => todo.completed;

    @observable currentFilter = AppState.ALL;

    nextId = 0;
    @observable currentTodo;

    @action resetCurrent = ()=> this.currentTodo = {
        id: this.nextId++,
        text: '',
        completed: false
    }

    @observable todos = [];

    @action addTodo= todo => {
        this.todos.push(todo);
        this.resetCurrent();
    }

    constructor() {
        this.resetCurrent();
    }
}

const appState = new AppState();

const addTodoComp = (todo, addTodo) => yo`<form onsubmit=${
    ev => {
        ev.preventDefault();
        addTodo(todo);
    }}>
        <input type="text" value="${todo.text}" oninput=${ev => todo.text = ev.target.value} placeholder="">
        <button type="submit">Add Todo</button>
    </form>`

const todoComp = todo => yo`<div 
    onclick=${ev => todo.completed = !todo.completed}
    style="text-decoration: ${ todo.completed ? 'line-through': 'none'}"
    >
    ${todo.text}
</div>`

const todoListComp = state => yo`<div>
    ${state.todos
    .filter(appState.currentFilter)
    .map(todoComp)}
</div>`

const filterComp = (state, filter, label) => yo`<span 
        onclick=${ev => state.currentFilter = filter} 
        style="text-decoration: ${state.currentFilter === filter ? 'underline': 'none'}">
        ${label}
    </span>`

const filterListComp = state => yo`<div>
    ${filterComp(state, AppState.ALL, "ALL")}
    ${filterComp(state, AppState.ACTIVE, "ACTIVE")}
    ${filterComp(state, AppState.COMPLETED, "COMPLETED")}
</div>`

const appComp = state => yo`<div>
    ${addTodoComp(state.currentTodo, state.addTodo)}
    ${todoListComp(state)}
    <hr>
    ${filterListComp(state)}
</div>`;

const ref = document.body.appendChild(appComp(appState));

autorun(() => yo.update(ref, appComp(appState)));
