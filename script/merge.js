// 병합정렬

function merging(left, right) {
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

function doMergeSort(arr){
    if(arr.length === 1) return arr;
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merging(doMergeSort(left), doMergeSort(right));
}

function mergeSort(arr){
    let resultArr = doMergeSort(arr);

    for(let i = 0; i < arr.length; i++)
      arr[i] = resultArr[i];
}