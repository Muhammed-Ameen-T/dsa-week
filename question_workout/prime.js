//! Find the number is Prime or not
// function isPrime(n) {
//     if (n<2) {
//         return false
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {
//         if (n%i==0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(isPrime(2));


//! Find Prime Numbers in an array
// function findPrimes(arr) {
//     function isPrime(num) {
//         if (num<=1) return false
//         if (num===2) return true
//         for (let i = 2; i <=Math.sqrt(num); i++) {
//             if (num%i==0) return false
//         }
//         return true
//     }
//     let primes=[];
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) {
//             primes.push(arr[i])
//         }
//     }
//     return primes
// }
// let arr = [1,2,3,4,5,6,7,8,9];
// console.log(findPrimes(arr));
