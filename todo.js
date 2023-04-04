const toDoForm = document.getElementById('todo_form');
const toDoInput = document.querySelector('#todo_form input');
const toDoList = document.getElementById('todo_list');
const TODOS_KEY = "todos"


let toDos = [];


//localstorage에 저장
function saveToDos() {
  //array로 변환 setItem (key, value)
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

//리스트 삭제
function deleteToDo(event) { 
  //parentElement 는 클릭된 element의 부모
  const li = event.target.parentElement;
  li.remove();
}


//리스트 추가한걸 화면에 보여주기
function paintToDo(newTodo) {
  //li,span 만들기
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  //삭제용 버튼생성
  const button = document.createElement('button');
  button.innerText = '➖';
  button.addEventListener("click",deleteToDo)
  //li안에 span넣기
  li.appendChild(span);
  //li안에 버튼넣기
  li.appendChild(button);
  //todolist안에 li넣기기
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  //to-do 입력시 새로고침 방지
  event.preventDefault();
  //todoinput의 value 값을 저장
  const newTodo = toDoInput.value;
  //todo 입력하고 엔터 누르면 값 사라짐
  toDoInput.value = "";
  toDos.push(newTodo);
  //paintTodo호출 후 newTodo를 보냄
  paintToDo(newTodo);//화면에 표현하는 용도
  saveToDos();//저장
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null ) { 
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //예전todo
  parsedToDos.forEach(paintToDo);

}