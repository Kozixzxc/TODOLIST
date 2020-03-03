const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"); // h4

const USER_LS="currentUser",
    SHOWING_CN = "showing"; //showing 클래스 갖고오기

function paintGreeting(text){
    form.classList.remove(SHOWING_CN); // 폼 숨기기(색칠때문에)
    greeting.classList.add();
    greeting.innerText = `Hello ${text}`
}

function loadName(){ //localstorage function
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        // 유저 없음
    } else {
        paintGreeting(currentUser); //로컬스토리지 텍스트랑 같이 호출
    }
}

function init(){
    loadName();
}
init();