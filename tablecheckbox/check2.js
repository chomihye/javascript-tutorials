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
    {
        id: "ggg789",
        name: "이슬이",
        age: 7,
    },
    {
        id: "qbqb25",
        name: "철수",
        age: 81,
    },
];

document.addEventListener("DOMContentLoaded", function (e) {
    setTableData(data);

    document.querySelector("#checkAll").addEventListener("click", isChecked);

    document.querySelector(".deleteAllBtn").addEventListener("click", function (e) {
        const checkbox = document.querySelectorAll(".check:checked");
        checkbox.forEach((cb) => {
            // console.log(cb.dataset.id);
            data = data.filter((item) => item.id !== cb.dataset.id);
        });
        setTableData(data);
    });

    document.querySelector(".sortBtn").addEventListener("click", sortToggle);
    document.querySelector(".resetBtn").addEventListener("click", aaa);
});

function setTableData(list) {
    const table = document.querySelector("#check-table tbody");
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

//오름차순 내림차순
//토글............

let sortData = true;

function sortToggle() {
    if (sortData) {
        data.sort(function (a, b) {
            return a.age - b.age;
        }); //오름차순
        sortData = false;
    } else {
        data.sort(function (a, b) {
            return b.age - a.age;
        }); //내림차순
        sortData = true;
    }
    setTableData(data);
}

//초기화 시키기
//원래 상태를 저장해놓음..?
//초기화 버튼을 클릭하면..초기화가됨.......?

// let currentData =

let originData = data;
console.log(data);

function aaa() {
    setTableData(data);
}
