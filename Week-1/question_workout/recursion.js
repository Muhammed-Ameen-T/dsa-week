// ! Factorial using Recursion
function factorial(n) {
    if (n<=1) {
        return 1
    }
    return n*factorial(n-1)
}
console.log(factorial(5));

//! Factorial Using Recursion
// function names(n) {
//     if (n<=1) {
//         return
//     }
//     names(n-1)
//     console.log(n);
// }
// names(4)

//! Factorial Using For Loop
// function factorial(num) {
//     let sum = 1
//     for (let i = 2; i <= num; i++) {
//         sum = sum*i
//     }
//     return sum
// }

// console.log(factorial(5));

//! Sum of Array Elements in Recursion
// function sumArray(arr,n) {
//     if (n<=0) {
//         return 0;
//     }
//     return arr[n-1] + sumArray(arr,n-1)
// }

// const array = [1, 2, 3, 4, 5];
// console.log(sumArray(array, 3)); // Output: 15