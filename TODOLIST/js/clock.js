const clock = document.querySelector(".js-clock .clock__text");

function getTime(){ //현재 시간 받아오기
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const time = `${hours < 10 ? `0${hours}` : hours}:${
      minutes < 10 ? `0${minutes}` : minutes
    }`;
    clock.innerHTML = time;
    return;
}

function init(){ //clockTitle.innerText를 반영시키기 위한 init(js의 main같은 문장)
    getTime(); // getTime함수 실행
    setInterval(getTime, 1000); // 1초마다 시간 갖고와서 갱신시키기(초단위 추가)
    return;
}

init(); // 작동