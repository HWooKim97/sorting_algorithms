// 버블정렬

function BubbleSort(originArr){
    const startTime = new Date().getTime();
    let arr = JSON.parse(JSON.stringify(originArr));

    for(let i = 0; i < arr.length; i++){
        for(j = 1; j < arr.length - i; j++){
            if(arr[j - 1] > arr[j])
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        }
    }
    const endTime = new Date().getTime();

    result[BUBBLE] = endTime - startTime;
    textArea[BUBBLE].innerText = arr;
}