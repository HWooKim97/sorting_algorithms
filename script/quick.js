// 퀵정렬

function DoQuickSort(arr, left, right){
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

    if (left < R) DoQuickSort(arr, left, R);
    if (L < right) DoQuickSort(arr, L, right);
}

function QuickSort(arr){
    DoQuickSort(arr, 0, arr.length - 1);
}