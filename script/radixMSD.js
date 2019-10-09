//기수정렬 MSD

function DoRadixSortMSD(arr, max, mod, cnt){
    console.log(arr);

    let queue = [];
    for(;mod >= 1; mod /= 10){
        for(let i = 0; i < arr.length; i++){
            let bucket = parseInt((arr[i] % (mod * 10)) / mod);
            if(queue[bucket] == null)
                queue[bucket] = [];
            queue[bucket].push(arr[i]);
        }

        while(queue.length != 0){
            if(queue[0] != null){
                if(queue[0].length == 1) arr[cnt++] = queue[0].shift();
                else if(queue[0].length == 0) queue.shift();
                else DoRadixSortMSD(queue.shift(), max, mod / 10, cnt);
            } else queue.shift();
        }
    }
}

function RadixSortMSD(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
        if(max < arr[i]) max = arr[i];
    
    let mod = 1;
    while(max / mod >= 10) mod *= 10;

    DoRadixSortMSD(arr, max, mod, 0);
}