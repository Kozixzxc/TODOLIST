const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){ //현재 시간 받아오기
    const date = new Date(); // date class 생성
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText = `${hours}:${minutes}`;
}

function init(){
    getTime();
}

init();