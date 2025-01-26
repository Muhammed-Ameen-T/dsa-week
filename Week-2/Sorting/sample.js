//! Bubble Sort
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length-i-1; j++) {
//             if (arr[j]>arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr
// }

// let exampleList = [64, 34, 25, 12, 22, 11, 90]; 
// let sortedList = bubbleSort(exampleList); 
// console.log("Sorted list:", sortedList);

//! Merge Sort
// function mergeSort(arr) {
//     if(arr.length<=1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let right = arr.slice(0,mid)
//     let left = arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right) {
//     let sorted = [];
//     while (left.length && right.length) {
//         if (left[0]<right[0]) {
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// const numbers = [38, 27, 43, 3, 9, 82, 10]; 
// const sortedNumbers = mergeSort(numbers); 
// console.log(sortedNumbers); 

//! Quick Sort
// function quickSort(arr) {
//     if (arr.length<=1) {
//         return arr
//     }
//     let pivot = arr[arr.length-1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i]<pivot) {
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// const numbers = [38, 27, 43, 3, 9, 82, 10]; 
// const sortedNumbers = quickSort(numbers); 
// console.log(sortedNumbers);

//! Insertion Sort
// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let j = i-1;
//         let key = arr[i];
//         while (j>=0 && arr[j]>key) {
//             arr[j+1]=arr[j];
//             j--
//         }
//         arr[j+1]=key
//     }
//     return arr
// }

// arr = [5, 2, 9, 1, 5, 6];
// console.log(insertionSort(arr));

//! Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for(let i=0;i<n;i++){
        let minIndex = i;
        for (let j = i+1; j < n; j++) {
            if (arr[j]<arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp
        }
    }
    return arr
}

let exampleList = [64, 34, 25, 12, 22, 11, 90]; 
let sortedList = selectionSort(exampleList); 
console.log("Sorted list:", sortedList);  