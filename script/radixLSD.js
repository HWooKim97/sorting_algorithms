// 기수정렬

function RadixSortLSD(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++)
        if(max < arr[i]) max = arr[i];

    let stack = [];

    for(let mod = 10; max / mod >= 0.1; mod *= 10){
        for(let i = 0; i < arr.length; i++){
            let bucket = arr[i] % mod;
            if(stack[bucket] == null)
                stack[bucket] = [];
            stack[bucket].push(arr[i]);
        }
        let cnt = 0;
        for(let i = 0; i < stack.length; i++){
            let value = null;
            if(stack[i] != null){
                while((value = stack[i].shift()) != null)
                    arr[cnt++] = value;
            }
        }
    }
}