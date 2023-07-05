//데이터
let data = [
  {
    id: "abx123",
    name: "짱구",
    age: 19,
  },
  {
    id: "zzz777",
    name: "흰둥이",
    age: 3,
  },
  {
    id: "bwb456",
    name: "유리",
    age: 5,
  },
];

document.addEventListener("DOMContentLoaded", function (e) {
  setTableData(data);

  document.querySelector("#checkAll").addEventListener("click", isChecked);

  document
    .querySelector(".deleteAllBtn")
    .addEventListener("click", function (e) {
      const checkbox = document.querySelectorAll(".check:checked");
      checkbox.forEach((cb) => {
        // console.log(cb.dataset.id);
        data = data.filter((item) => item.id !== cb.dataset.id);
      });
      setTableData(data);
    });
});

function setTableData(list) {
  const table = document.querySelector("#check_table tbody");
  table.innerHTML = "";
  list.forEach((element) => {
    let row = `
        <tr id="listBody">
            <td><input type="checkbox" id="checkAll" class="check" data-id="${element.id}" onchange="selectChecked()" /></td>
            <td >${element.id}</td>
            <td >${element.name}</td>
            <td >${element.age}</td>
            <td><button type="button" class="deleteBtn" data-id="${element.id}">삭제</button></td>
        </tr>
    `;
    table.innerHTML += row;
  });
  setDeleteButtonEvent();
}

// 개별 삭제버튼 이벤트 설정
function setDeleteButtonEvent() {
  const btn_list = document.querySelectorAll(".deleteBtn");
  btn_list.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      data = data.filter((item) => item.id !== this.dataset.id);
      setTableData(data);
    });
  });
}

//개별 체크 해제
function selectChecked() {
  const checkAll = document.querySelector("#checkAll");
  const checkbox = document.querySelectorAll(".check");
  let allChecked = true;

  for (let i = 0; i < checkbox.length; i++) {
    if (!checkbox[i].checked) {
      allChecked = false;
    }
  }
  checkAll.checked = allChecked;
}

//전체 체크,해제
function isChecked(e) {
  const isCheck = e.target.checked;
  const checkbox = document.querySelectorAll(".check");

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].checked = isCheck;
  }
}
