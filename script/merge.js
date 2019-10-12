// 병합정렬

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

function MergeSort(arr){
    let resultArr = DoMergeSort(arr);

    for(let i = 0; i < arr.length; i++)
      arr[i] = resultArr[i];
}