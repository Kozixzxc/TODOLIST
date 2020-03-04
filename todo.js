const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = []; // todos array에 todolist 저장

function deleteToDo(event) { //target으로 잡은 button의 li의 id를 삭제함
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) { // foreach처럼 각각의 item에 실행시킴
    return toDo.id !== parseInt(li.id); // 모든 todo의 li의 id와 같지 않을 때
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() { //todo를 가져와서 스토리지에 저장
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // json.stringfy로 object-> string 변환
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo);

  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;

  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // toDos array안에 toDosObj 삽입
  saveToDos();
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
    parsedToDos.forEach(function(toDo) { //forEach는 Array에 담겨있는 것들 각각에 한번씩 함수 실행
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();