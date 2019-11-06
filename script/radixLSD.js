// 기수정렬 LSD

function radixSortLSD(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
        if(max < arr[i]) max = arr[i];

    let queue = [];

    for(let mod = 10; max / mod >= 0.1; mod *= 10){
        for(let i = 0; i < arr.length; i++){
            let bucket = arr[i] % mod;
            if(queue[bucket] == null)
                queue[bucket] = [];
            queue[bucket].push(arr[i]);
        }

        let cnt = 0;
        for(let i = 0; i < queue.length; i++){
            while(queue[i] != null && queue[i].length != 0)
                arr[cnt++] = queue[i].shift();
        }
    }
}