function findFrequency(string) {
    let frequency = {};

    for (let char of string) {
        if (frequency[char]) {
            frequency[char]++
        }else{
            frequency[char]=1
        }
    }
    for (const char in frequency) {
        if (frequency[char]>2) {
            console.log(char);
        }
    }
    return frequency
}

let str = 'Muhammed Ameen';
const result = findFrequency(str); 
console.log(result);//{ M: 1, u: 1, h: 1, a: 1, m: 3, e: 3, d: 1, ' ': 1, A: 1, n: 1 }