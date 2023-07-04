const checkAll = document.querySelector("#checkAll");
const checkbox = document.querySelectorAll(".check");

//전체 체크,해제
function isChecked() {
    const isCheck = checkAll.checked;

    if (isCheck) {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = true;
        }
    } else {
        for (let i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
    }
}
//개별 체크 해제
function selectChecked() {
    let allChecked = true;

    for (let i = 0; i < checkbox.length; i++) {
        if (!checkbox[i].checked) {
            allChecked = false;
        }
    }
    checkAll.checked = allChecked;
}

checkAll.addEventListener("click", isChecked);

for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", selectChecked);
}
