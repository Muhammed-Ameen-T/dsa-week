function quickSort(arr) {
    if (arr.length<=1) {
        return arr;
    }
    let pivot =  arr[arr.length-1];
    let left=[]
    let right=[];
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i]<pivot) {
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}


const numbers = [38, 27, 43, 3, 9, 82, 10]; 
const sortedNumbers = quickSort(numbers); 
console.log(sortedNumbers);