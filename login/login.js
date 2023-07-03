//아이디 미입력 -> 아이디 입력 알림
//비밀번호 미입력 -> 비밀번호 입력 알림
//아이디 비번 test, 1234 ->실패시 확인, 성공시 페이지 이동

const loginBtn = document.querySelector(".loginBtn");

function checkField() {
    let id = document.querySelector(".id");
    let pw = document.querySelector(".pw");

    if (id.value.length == 0) {
        alert("아이디를 입력하세요");
        id.focus();
        return false;
    }
    if (pw.value.length == 0) {
        alert("비밀번호를 입력하세요");
        pw.focus();
    }
    if (id.value == "test" && pw.value == "1234") {
        alert("로그인 성공");
    }
}

function moveUrl() {
    let link = "www.naver.com";
    location.href = link;
}

loginBtn.addEventListener("click", checkField);
loginBtn.addEventListener("click", moveUrl);
