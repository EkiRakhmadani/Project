const dateHTML = document.getElementById("dateToday");
const date = new Date().toUTCString().slice(5, 16);
dateHTML.innerHTML = date;

// ==== input ====
const todoInput = document.querySelector(".todo-input");
const btnInput = document.querySelector(".todo-button");

const todoList = document.querySelector(".todo-list");

// event listener
btnInput.addEventListener("click", addTodo);
function addTodo(event) {
  event.preventDefault();

  if (todoInput.value === "") {
    alert("Input tidak boleh kosong");
    return;
  }

  // expectasi
  /*   <div class="todo">
    <li class="todo-item">Todo ke 1</li>
    <button class="done-btn">Done</button>
    <button class="delete-btn">Delete</button>
  </div> */

  const div = document.createElement("div");
  div.classList.add("todo");
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.innerHTML = todoInput.value;
  const done = document.createElement("button");
  done.classList.add("done-btn");
  done.innerHTML = "Done";
  const del = document.createElement("button");
  del.classList.add("delete-btn");
  del.innerHTML = "Delete";
  div.appendChild(li);
  div.appendChild(done);
  div.appendChild(del);
  todoList.appendChild(div);
  todoInput.value = "";
}

todoList.addEventListener("click", doneAndDelete);
function doneAndDelete(event) {
  const btn = event.target;
  const todo = btn.parentElement;

  if (btn.innerText === "Done") {
    todo.classList.add("done-todo");
    btn.remove();
  } else if (btn.innerText === "Delete") {
    todo.classList.add("remove");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
}
