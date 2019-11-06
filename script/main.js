const inputSelf = document.querySelector(".input-self");
const inputCnt = document.querySelector(".input-cnt");
const inputMax = document.querySelector(".input-max");
const textInfo = document.querySelector(".info");
const textOrigin = document.querySelector(".origin");
const textResultASC = document.querySelector(".result-asc");
const textResultDESC = document.querySelector(".result-desc");

let originArr = []; 
let result = [];
let index = 0;

let tmp;
let check = true;

const SORTING = [
    JSDfaultSort, insertSort, selectSort,
    bubbleSort, quickSort, mergeSort,
    heapSort, shellSort, radixSortLSD,
    radixSortMSD, countSort
]

function JSDfaultSort(arr){
    arr.sort(function(a,b){
        return a - b;
    });
}

function timeCheck(fnc){
    const startTime = performance.now();
    let arr = JSON.parse(JSON.stringify(originArr));

    fnc(arr);

    const endTime = performance.now();

    result[index++] = endTime - startTime;

    textResultASC.innerText = arr;
    textResultDESC.innerText = arr.reverse();
}

function sort(){
    textOrigin.innerText = originArr;
    index = 0;
    result = [];
    
    for(let i = 0; i < SORTING.length; i++)
        timeCheck(SORTING[i]);
    
    setTimeChart(result);
}

function ranNum(cnt, max){
    for(let i = 0; i < cnt; i++){
        originArr.push(Math.floor(Math.random() * max) + 1);
    }
}

function handleInputRan(event){
    if (event.keyCode === 13){
        if (inputCnt.value == `` || inputMax.value == ``){
            alert(`Enter the value!`);
        } else{
            originArr = [];
            ranNum(inputCnt.value, inputMax.value);
            sort();
        }
    }
}

function handleInputSelf(event){
    if (event.keyCode === 13){
        if (inputSelf.value == ``){
            alert(`Enter the value!`);
        } else{
            originArr = [];
            event.preventDefault();
            originArr = inputSelf.value.split(' ').map(function(item){
                return parseInt(item, 10);
            });
            
            for(let i = 0; i < originArr.length; i++){
                if (isNaN(originArr[i])) originArr.splice(i--,1);
            }
            sort();
        }
    }
}

function inputCheck(event){ 
    if(event.keyCode >= 48 && event.keyCode <= 57) return true;
    else if(event.keyCode === 32 || event.keyCode === 13) return true;
    else return false;
}

function init(){
    inputSelf.onkeypress = function(event){
        tmp = inputSelf.value;
        check = inputCheck(event);
        handleInputSelf(event);
    };
    inputSelf.onkeyup = function(event){
        if(check === false){
            inputSelf.value = tmp;
            window.alert("input only number!");
            check = true;
        }
    };
    inputCnt.onkeypress = handleInputRan;
    inputMax.onkeypress = handleInputRan;
}

init();