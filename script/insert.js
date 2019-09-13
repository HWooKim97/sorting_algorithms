// 삽입정렬

function InsertSort(originArr){
    const startTime = new Date().getTime();
    let arr = JSON.parse(JSON.stringify(originArr));

    for(let i = 1; i < arr.length; i++){
        let cnt = 0;
        for(let j = i - 1; j >= 0; j--){
            if(arr[i - cnt] < arr[j]){
                [arr[i - cnt], arr[j]] = [arr[j], arr[i - cnt]];
                cnt++;
            } else break;
        }
    }
    const endTime = new Date().getTime();

    result[INSERT] = endTime - startTime;
    textArea[INSERT].innerText = arr;
}