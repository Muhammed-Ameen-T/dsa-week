function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

function merge(left,right) {
    let result = [], leftIndex=0, rightIndex=0;
    while (leftIndex<left.length&&rightIndex<right.length) {
        if (left[leftIndex]<right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        }else{
            result.push(right[rightIndex])
            rightIndex++
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
let arr = [2,5,1,7,4,9,3]
console.log(mergeSort(arr))
