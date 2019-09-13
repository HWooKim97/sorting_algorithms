// 선택정렬

function SelectSort(originArr){
    const startTime = new Date().getTime();
    let arr = JSON.parse(JSON.stringify(originArr));

    for(let i = 0; i < arr.length - 1; i++){
        let tmp = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]) tmp = j;
        }
        [arr[i], arr[tmp]] = [arr[tmp], arr[i]];
    }
    const endTime = new Date().getTime();

    result[SELECT] = endTime - startTime;
    textArea[SELECT].innerText = arr;
}