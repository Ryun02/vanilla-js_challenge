const todoForm = document.querySelector("#todo-Form");
const todoList = document.querySelector("#todo-List");
const todoInput = todoForm.querySelector("input");
const TODOS_KEY = "toDos";
let toDos =  [];

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDoInput = todoInput.value;
    const newToDoObject = {
        text: newToDoInput,
        id: Date.now(),
    };
    toDos.push(newToDoObject);
    paintToDo(newToDoObject);
    todoInput.value = "";
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const todoListLi = event.target.parentNode;
    todoListLi.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(todoListLi.id));
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    todoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    button.addEventListener("click", deleteToDo);
}


todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos =  localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
  