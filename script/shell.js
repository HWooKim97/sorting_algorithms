// 셸정렬

function Shell_InsertSort(arr, begin, gap){
    for(let i = begin + gap; i < arr.length; i += gap){
        let tmp = arr[i], j;
        for(j = i - gap; j >= begin && tmp < arr[j]; j -= gap)
            arr[j + gap] = arr[j];
        arr[j + gap] = tmp;
    }
}

function ShellSort(arr){
    for(let gap = Math.floor((arr.length) / 2); gap > 0; gap = Math.floor(gap / 2)){
        if(gap % 2 === 0) gap++;
        for(let i = 0; i < gap; i++)
            Shell_InsertSort(arr, i, gap);
    }
}