const toDoForm = document.getElementById("todo_form");
const toDoInput = document.querySelector("#todo_form input");
const toDoList = document.getElementById("todo_list");

function paintToDo(newTodo) {
  console.log("오늘 할일", newTodo);
  //li,span 만들기
  const li = document.createElement("li");
  const span = document.createElement("span");
  //li안에 span넣기
  li.appendChild(span);
}

function handleToDoSubmit(event) {
  //to-do 입력시 새로고침 방지
  event.preventDefault();
  //todoinput의 value 값을 저장
  const newTodo = toDoInput.value;
  //todo 입력하고 엔터 누르면 값 사라짐
  toDoInput.value = "";
  //paintTodo호출 후 newTodo를 보냄
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
