//데이터
const data = [
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

//데이터 가져오기
// td 에 내용 보여지게 하기
data.forEach((element) => {
    console.log(element);

    const table = document.querySelector("table");
    let row = `<tr>
                    <td><input type="checkbox" id="checkAll" class="check" onchange="selectChecked()" /></td>
                    <td >${element.id}</td>
                    <td >${element.name}</td>
                    <td >${element.age}</td>
                </tr>`;
    table.innerHTML += row;
});

// const checkAll = document.querySelector("#checkAll");
// const checkbox = document.querySelectorAll(".check");
document.querySelector("#checkAll").addEventListener("click", isChecked);

//전체 체크,해제
function isChecked(e) {
    const isCheck = e.target.checked;
    const checkbox = document.querySelectorAll(".check");

    for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].checked = isCheck;
    }
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

// for (let i = 0; i < checkbox.length; i++) {
//     checkbox[i].addEventListener("click", selectChecked);
// }

//fetch 사용하기
function fn() {
    fetch("/tablecheckbox/data.json")
        .then((res) => res.json())
        .then((data) => {
            data.data.forEach((a) => {
                console.log(a);
            });
        });
}

fn();
