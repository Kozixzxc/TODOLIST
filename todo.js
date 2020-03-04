const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

const toDos = []; //todos array에 todolist 저장

function saveToDos() { // todo를 가져와서 스토리지에 저장
  localStorage.setItem(TODOS_LS , JSON.stringify(toDos)); //json.stringfy로 object->string변환
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;

  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: toDos.length + 1
  };
  saveToDos()
  toDos.push(toDoObj); //toDos array 안에 toDosObj 넣기
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}


function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    }); //forEach는Array에 담겨있는것들 각각에 한번씩 함수를 실행시킴
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();