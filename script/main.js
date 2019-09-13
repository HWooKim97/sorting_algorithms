const inputSelf = document.querySelector(".input-self");
const inputCnt = document.querySelector(".input-cnt");
const inputMax = document.querySelector(".input-max");
const textInfo = document.querySelector(".info");
const textOrigin = document.querySelector(".origin");

const INSERT = 0, SELECT = 1, BUBBLE = 2, QUICK = 3,
    MERGE = 4, HEAP = 5, SHELL = 6, RADIX = 7 , COUNT = 8;

const textArea = [document.querySelector(".insert"),
    document.querySelector(".select"),
    document.querySelector(".bubble"),
    document.querySelector(".quick"),
    document.querySelector(".merge"),
    document.querySelector(".heap"),
    document.querySelector(".radix"),
    document.querySelector(".count")
];

let originArr = []; 

let result = [];

function Sort(arr){
    new Promise(function(resolve, reject){
        textOrigin.innerText = arr;
    })
    .then(InsertSort(arr))
    .then(SelectSort(arr))
    .then(BubbleSort(arr))
    .then(QuickSort(arr))
    .then(MergeSort(arr))
    .then(HeapSort(arr))
    .then(ShellSort(arr))
    .then(RadixSort(arr))
    .then(CountSort(arr))
    .then(console.log(result))
    .catch(function(err){
        console.log("error");
    });
}

function RanNum(cnt, max){
    originArr = [];
    for(let i = 0; i < cnt; i++){
        originArr[i] = Math.floor(Math.random() * max) + 1;
    }
}

function HandleInputRan(event){
    if(event.keyCode === 13){
        if(inputCnt.value == `` || inputMax.value == ``){
            alert(`Enter the value!`);
        }else{
            RanNum(inputCnt.value, inputMax.value);
            inputCnt.value = ``;
            inputMax.value = ``;
            Sort(originArr);
        }
    }
}

function HandleInputSelf(event){
    if(event.keyCode === 13){
        if(inputSelf.value == ``){
            alert(`Enter the value!`);
        }else{
            event.preventDefault();
            originArr = inputSelf.value.split(' ').map(function(item){
                return parseInt(item, 10);
            });
            inputSelf.value = ``;
            Sort(originArr);
        }
    }
}

function init(){
    inputSelf.onkeypress = HandleInputSelf;
    inputCnt.onkeypress = HandleInputRan;
    inputMax.onkeypress = HandleInputRan;
}

init();