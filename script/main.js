const inputSelf = document.querySelector(".input-self");
const inputCnt = document.querySelector(".input-cnt");
const inputMax = document.querySelector(".input-max");
const textInfo = document.querySelector(".info");
const textOrigin = document.querySelector(".origin");
const textResult = document.querySelector(".result");

let originArr = []; 
let result = [];
let index = 0;

function JSDfaultSort(arr){
    arr.sort(function(a,b){
        return a - b;
    });
}

function TimeCheck(fnc){
    const startTime = performance.now();
    let arr = JSON.parse(JSON.stringify(originArr));

    fnc(arr);

    const endTime = performance.now();

    result[index++] = endTime - startTime;
    textResult.innerText = arr;

    console.log(fnc.name + ` end!`);
}

function Sort(){
    new Promise(function(resolve, reject){
        textOrigin.innerText = originArr;
        index = 0;
        result = [];
    })
    .then(TimeCheck(JSDfaultSort))
    .then(TimeCheck(InsertSort))
    .then(TimeCheck(SelectSort))
    .then(TimeCheck(BubbleSort))
    .then(TimeCheck(QuickSort))
    .then(TimeCheck(MergeSort))
    .then(TimeCheck(HeapSort))
    .then(TimeCheck(ShellSort))
    .then(TimeCheck(RadixSortLSD))
    .then(TimeCheck(RadixSortMSD))
    .then(TimeCheck(CountSort))
    .then(SetTimeChart(result));
    console.log(result);
}

function RanNum(cnt, max){
    for(let i = 0; i < cnt; i++){
        originArr.push(Math.floor(Math.random() * max) + 1);
    }
}

function HandleInputRan(event){
    if(event.keyCode === 13){
        if(inputCnt.value == `` || inputMax.value == ``){
            alert(`Enter the value!`);
        }else{
            originArr = [];
            RanNum(inputCnt.value, inputMax.value);
            Sort();
        }
    }
}

function HandleInputSelf(event){
    if(event.keyCode === 13){
        if(inputSelf.value == ``){
            alert(`Enter the value!`);
        }else{
            originArr = [];
            event.preventDefault();
            originArr = inputSelf.value.split(' ').map(function(item){
                return parseInt(item, 10);
            });
            Sort();
        }
    }
}

function init(){
    inputSelf.onkeypress = HandleInputSelf;
    inputCnt.onkeypress = HandleInputRan;
    inputMax.onkeypress = HandleInputRan;
}

init();