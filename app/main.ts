import yo from 'yo-yo';
import {observable, autorun} from "mobx";

const appState = observable({
    people: [{
        name: "John",
        age: 35,
        done: false
    }]
});


const createPerson = ()=> ({
    name: "Rando",
    age: 20,
    done: false
})

const inputComp = state =>
    yo`<input value="${state.name}" oninput=${ev => state.name = ev.target.value}>`

const buttonComp = state =>
    yo`<button onclick=${ev => state.age++}>Age up!</button>`;

const personComp = person => yo`<div>
  ${inputComp(person)}
  ${buttonComp(person)}
  <div
    style="text-decoration: ${person.done ? 'line-through':'none'}"
    onclick=${ev => person.done = !person.done}    
    >${person.name} is ${person.age}</div>
</div>`

const peopleList = state =>
    state.people.map(person => personComp(person))

const appComp = state => yo`<div>
  <button onclick=${ev => state.people.push(createPerson())}>Add Person</button>
  <button onclick=${ev => console.log(state.people)}>Log state to console</button>
  ${peopleList(state)}
</div>`;

const ref = document.body.appendChild(appComp(appState));

autorun(() => yo.update(ref, appComp(appState)));
