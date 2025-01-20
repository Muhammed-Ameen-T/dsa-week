function mergeSort(arr) {
    if(arr.length <= 1){
        return arr;
    }    
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right))
}
function merge(left,right) {
    let sorted = [];
    while (left.length && right.length) {
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right];
}

const numbers = [38, 27, 43, 3, 9, 82, 10]; 
const sortedNumbers = mergeSort(numbers); 
console.log(sortedNumbers); 

