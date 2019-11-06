// 버블정렬

function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(j = 1; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j])
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
}