// 힙정렬

function HeapSort(originArr){
    const startTime = new Date().getTime();
    let arr = JSON.parse(JSON.stringify(originArr));

    let heap = [];
    heap[0] = -1;

    //insert heap
    arr.forEach(element => {
        heap.push(element);
        let newNode = heap.length - 1;

        while(newNode > 1){
            const parentNode = Math.floor(newNode / 2);
            if(heap[newNode] < heap[parentNode]){
                [heap[newNode], heap[parentNode]] = [heap[parentNode], heap[newNode]];
                newNode = parentNode;
            }else break;
        }
    });
    //delete heap
    arr = [];

    for(let i = 1; i < heap.length; i++){
        arr.push(heap[1]);
        heap[1] = heap[heap.length - i];
        let nowNode = 1;
        while(nowNode <= heap.length - i){
            const left = nowNode * 2;
            let right = nowNode * 2 + 1;
            
            if(right > heap.length - i) right = left;
            if(heap[left] <= heap[right] && heap[nowNode] > heap[left]){
                [heap[nowNode], heap[left]] = [heap[left], heap[nowNode]];
                nowNode = left;
            } else if(heap[left] >= heap[right] && heap[nowNode] > heap[right]){
                [heap[nowNode], heap[right]] = [heap[right], heap[nowNode]];
                nowNode = right;
            } else break;
        }
    }
    
    const endTime = new Date().getTime();

    result[HEAP] = endTime - startTime;
    textArea[HEAP].innerText = arr;
}