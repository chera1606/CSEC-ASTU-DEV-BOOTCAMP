const inputTodo = document.getElementById("inputTodo");
const btnAdd = document.getElementById("btnAdd");
const listTodos = document.getElementById("listTodos");
const totalCount = document.getElementById("totalCount");
const doneCount = document.getElementById("doneCount");
const btnClear = document.getElementById("btnClear");

let totalTodos = 0;
let completedTodos = 0;

function updateCounts() {
  totalCount.textContent = totalTodos;
  doneCount.textContent = completedTodos;
}

function addTodo() {
  const task = inputTodo.value.trim();
  if (task === "") {
    alert("Please write something first!");
    return;
  }

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = task;

  const btnComplete = document.createElement("button");
  btnComplete.textContent = "Complete";

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Delete";

  btnComplete.addEventListener("click", function () {
    span.classList.toggle("completed");
    if (span.classList.contains("completed")) {
      completedTodos++;
    } else {
      completedTodos--;
    }
    updateCounts();
  });

  btnDelete.addEventListener("click", function () {
    if (span.classList.contains("completed")) {
      completedTodos--;
    }
    listTodos.removeChild(li);
    totalTodos--;
    updateCounts();
  });

  li.appendChild(span);
  li.appendChild(btnComplete);
  li.appendChild(btnDelete);
  listTodos.appendChild(li);

  totalTodos++;
  updateCounts();
  inputTodo.value = "";
}

btnAdd.addEventListener("click", addTodo);

btnClear.addEventListener("click", function () {
  listTodos.innerHTML = "";
  totalTodos = 0;
  completedTodos = 0;
  updateCounts();
});
