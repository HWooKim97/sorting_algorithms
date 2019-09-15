// 삽입정렬

function InsertSort(arr){
    for(let i = 1; i < arr.length; i++){
        let tmp = arr[i], j;
        for(j = i - 1; j >= 0 && tmp < arr[j]; j--)
            arr[j + 1] = arr[j];
        arr[j + 1] = tmp;
    }
}