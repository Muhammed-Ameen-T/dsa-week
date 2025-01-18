function sorts(arr) {
    let n = arr.length;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]>arr[j]) {
                let temp = arr[i]
                arr[i] =arr[j]
                arr[j]=temp
            }
        }
    }
    return arr
}

let arr = [2,3,1,6,4,9,7];
console.log(sorts(arr))
