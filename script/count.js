// 계수정렬

function countSort(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
        if(max < arr[i]) max = arr[i];

    let countArr = Array(max + 1).fill(0);
    for(let i = 0; i < arr.length; i++)
        countArr[arr[i]]++;

    let countSum = Array(max + 1).fill(0);
    countSum[0] = countArr[0];
    for(let i = 1; i <= max; i++)
        countSum[i] = countSum[i - 1] + countArr[i];

    let tmpArr = [];
    for(let i = 0; i < arr.length; i++)
        tmpArr[i] = arr[i];

    for(let i = 0; i < arr.length; i++){
        arr[countSum[tmpArr[i]] - 1] = tmpArr[i]; 
        countSum[tmpArr[i]]--;
    }
}