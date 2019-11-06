//기수정렬 MSD

let cntMSD = 0;

function doRadixSortMSD(resultArr, arr, mod){
    let queue = [];
    for(let i = 0; i < arr.length; i++){
        let bucket = parseInt((arr[i] % (mod * 10)) / mod);
        if(queue[bucket] == null)
            queue[bucket] = [];
        queue[bucket].push(arr[i]);
    }

    while(queue.length != 0){
        if(queue[0] != null){
            if(queue[0].length === 1) resultArr[cntMSD++] = queue[0].shift();
            else if(queue[0].length === 0) queue.shift();
            else if(mod === 1){
                while(queue[0].length != 0)
                    resultArr[cntMSD++] = queue[0].shift();
            }
            else doRadixSortMSD(resultArr, queue.shift(), mod / 10);
        } else queue.shift();
    }
}

function radixSortMSD(arr){
    let resultArr = [];
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
        if(max < arr[i]) max = arr[i];
    
    let mod = 1;
    while(max / mod >= 10) mod *= 10;

    cntMSD = 0;
    doRadixSortMSD(resultArr, arr, mod);

    for(let i = 0; i < arr.length; i++)
      arr[i] = resultArr[i];
}