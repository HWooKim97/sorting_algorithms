const inputSelf = document.querySelector(".input-self");
const inputCnt = document.querySelector(".input-cnt");
const inputMax = document.querySelector(".input-max");
const textInfo = document.querySelector(".info");

let numArr = [];

function ranNum(cnt, max){
    for(let i = 0; i < cnt; i++){
        numArr[i] = Math.floor(Math.random() * max) + 1;
    }
}

function handleInputRan(event){
    if(event.keyCode === 13){
        if(inputCnt.value == `` || inputMax.value == ``){
            alert(`Enter the value!`);
        }else{
            ranNum(inputCnt.value, inputMax.value);
            inputCnt.value = ``;
            inputMax.value = ``;
        }
    }
}

function handleInputSelf(event){
    if(event.keyCode === 13){
        if(inputSelf.value == ``){
            alert(`Enter the value!`);
        }else{
            event.preventDefault();
            numArr = inputSelf.value.split(' ');
            inputSelf.value = ``;
        }
    }
}

function timecheck(sort){
    const startTime = new Date().getTime();
    sort();
    const endTime = new Date().getTime();

    return endTime - startTime;
}

function init(){
    inputSelf.onkeypress = handleInputSelf;
    inputCnt.onkeypress = handleInputRan;
    inputMax.onkeypress = handleInputRan;
}

init();