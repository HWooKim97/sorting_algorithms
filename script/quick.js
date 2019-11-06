// 퀵정렬

function doQuickSort(arr, left, right){
    let L = left, R = right,
        pivot = arr[Math.floor((left + right) / 2)];

    if(L >= R) return;

    while (L <= R) {
        while (arr[L] < pivot) L++;
        while (arr[R] > pivot) R--;
        if (L <= R) {
            if (L != R) [arr[L], arr[R]] = [arr[R], arr[L]];
            L++; R--;
        }
    }

    if (left < R) doQuickSort(arr, left, R);
    if (L < right) doQuickSort(arr, L, right);
}

function quickSort(arr){
    doQuickSort(arr, 0, arr.length - 1);
}