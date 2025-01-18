function quikSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0];
    let left = [],right=[]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i]<pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i ])
        }
    }
    return quikSort(left).concat(pivot, quikSort(right))
}

let arr = [2, 5, 1, 7, 4, 9, 3]; 
console.log(quikSort(arr)); // Output: [1, 2, 3, 4, 5, 7, 9]