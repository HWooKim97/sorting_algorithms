const numInput = document.querySelector(".js-input");
const numBtn = document.querySelector(".js-btn");

let numArr = [];

function ranNum(max, cnt){
    for(let i = 0; i < cnt; i++){
        numArr[i] = Math.floor(Math.random() * max) + 1;
    }
}

function timecheck(sort){
    const startTime = new Date().getTime();
    sort();
    const endTime = new Date().getTime();

    return endTime - startTime;
}

function init(){

}

init();