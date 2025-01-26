function isPrime(num) {
    if (num<2) return false
    if(num<4) return true
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num%i===0) {
            return false
        }
    }
    return true
}

function findPrimes(arr) {
    let primes = arr.filter(num=> isPrime(num));
    return primes;
}

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
console.log('Primes:',findPrimes(arr));