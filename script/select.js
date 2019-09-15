// 선택정렬

function SelectSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let tmp = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[tmp] > arr[j]) tmp = j;
        }
        if(tmp != i)
            [arr[i], arr[tmp]] = [arr[tmp], arr[i]];
    }
}