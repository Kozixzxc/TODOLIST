const clockContainer = document.querySelector(".js-clock"); // clockContainer라는 이름으로 html document에서 js-clock 클래스를 가져옴
const clockTitle = clockContainer.querySelector("h1"); // clockContainer에서 h1을 선택해서 clockTitle로 지칭

function getTime(){ //현재 시간 받아오기
    const date = new Date(); // 일일 시간값인 Date를 받아오는 date class 생성
    const minutes = date.getMinutes(); 
    const hours = date.getHours(); 
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}`:minutes}:${
            seconds < 10 ? `0${seconds}` : seconds}`;  
    // div 내부 글 p 태그 내부 등 내부의 글을 가져올때 innerText를 사용함,  어떤 값을 넣고싶거나 수정하고 싶을 때도 사용함.
    //시,초가 10초 밑일 경우 한자릿수로 나오는걸 방지하기 위해 삼항연산자 사용
    //시,초가 10초 밑일경우 seconds앞에 0을 붙혀주는 코드, 그게 아니라면 seconds를 그대로 표기
}

function init(){ //clockTitle.innerText를 반영시키기 위한 init(js의 main같은 문장)
    getTime(); // getTime함수 실행
    setInterval(getTime, 1000); // 1초마다 시간 갖고와서 갱신시키기(초단위 추가)

}

init(); // 작동