function push(arr,...nums) {
    for (const num of nums) {
        arr[arr.length]=num
    }
    return arr.length;
}

function pop(arr) {
    if (arr.length===0) return undefined;
    let last = arr[arr.length-1];
    arr.length = arr.length-1;
    return last 
}

function shift(arr) {
    if (arr.length===0) {
        return undefined;
    }
    let fist = arr[0]
    for (let i = 0; i < arr.length-1; i++) {
        arr[i]=arr[i+1]
    }
    arr.length=arr.length-1;
    return fist
}

function unshift(arr,...nums) {
    let newLength = arr.length+nums.length;
    for (let i = arr.length-1; i >= 0; i--) {
        arr[i+nums.length] = arr[i];
    }
    for (let j = 0; j < nums.length; j++) {
        arr[j]=nums[j]
    }
    return newLength
}

let array1 = [2, 3, 4, 5]; push(array1, 0, 1); console.log(array1); // Output: [2, 3, 4, 5, 0, 1]
let array2 = [2, 3, 4, 5]; pop(array2); console.log(array2); // Output: [2, 3, 4]
let array3 = [2, 3, 4, 5]; shift(array3); console.log(array3); // Output: [3, 4, 5]
let array4 = [2, 3, 4, 5]; unshift(array4, 0, 1); console.log(array4); // Output: [0, 1, 2, 3, 4, 5]