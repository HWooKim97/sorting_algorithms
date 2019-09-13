// 병합정렬

function EndMergeSort(startTime, arr){
    const endTime = new Date().getTime();

    result[MERGE] = endTime - startTime;
    textArea[MERGE].innerText = arr;
}

function Merging(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while(leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    return [...result, ...left.slice(leftIndex), ...right.slice(rightIndex)];
}

function DoMergeSort(arr){
    if(arr.length === 1) return arr;
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return Merging(DoMergeSort(left), DoMergeSort(right));
}

function MergeSort(originArr){
    const startTime = new Date().getTime();
    let arr = JSON.parse(JSON.stringify(originArr));

    new Promise(function(resolve, reject){
        arr = DoMergeSort(arr);
    })
    .then(EndMergeSort(startTime, arr));
}