const toDoForm = document.getElementById('todo_form');
const toDoInput = document.querySelector('#todo_form input');
const toDoList = document.getElementById('todo_list');
const TODOS_KEY = 'todos';
const time = document.getElementById('time');

let toDos = [];

//날짜추가하기
const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();
const dayOfWeek = daysOfWeek[today.getDay()];

time.innerText = `${year}. ${month + 1}. ${date} (${dayOfWeek})`;

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
  //toDo id가 li의 id와 다른걸 남겨야함
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

//리스트 추가한걸 화면에 보여주기
function paintToDo(newTodo) {
  //li 만들기
  const li = document.createElement('li');
  li.id = newTodo.id;
  //input 만들기
  const input = document.createElement('input');
  input.setAttribute('value', newTodo.text);
  input.id = 'main_input';
  input.disabled = true;
  //check box 만들기
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  //삭제용 버튼생성
  const button = document.createElement('button');
  button.innerText = '➖';
  button.addEventListener('click', deleteToDo);
  //수정용 버튼 생성
  const editButton = document.createElement('button');
  editButton.innerText = '📝';
  editButton.id = 'editBtn';
  editButton.addEventListener('click', editTodo);
  //구성
  li.appendChild(checkBox);
  li.appendChild(input);
  li.appendChild(editButton);
  li.appendChild(button);
  toDoList.appendChild(li);

  //체크박스 중간 라인생성
  checkBox.addEventListener('change', (event) => {
    if (checkBox.checked) {
      input.style.textDecorationLine = 'line-through';
    } else {
      input.style.textDecorationLine = 'none';
    }
  });
}

//리스트 수정하기
function editTodo(event) {
  const mainInput = event.target.parentElement.querySelector('#main_input');
  console.log(mainInput);
  if (mainInput.disabled == true) {
    mainInput.disabled = false;
    mainInput.style.backgroundColor = 'white';
  } else { 
    mainInput.disabled = true;
    mainInput.style.backgroundColor = 'transparent';

  }
 

}


function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), //id를 통해 구분
  };
  toDos.push(newTodoObj);
  //paintTodo호출 후 newTodo를 보냄
  paintToDo(newTodoObj); //화면에 표현하는 용도
  saveToDos(); //저장
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //JSON 문자열을 JavaScript 객체로 변환
  toDos = parsedToDos; //예전todo
  parsedToDos.forEach(paintToDo);
}

// {id: 1, name: '조미혜'}
function test(user = {}) {
  console.log(user.name);
}

const userObj = {id: 2, name: 'youhyun'};
test(userObj);