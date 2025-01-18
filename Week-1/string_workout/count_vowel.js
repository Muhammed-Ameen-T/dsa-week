function countVowels(string) {
    let count = 0;
    let vowel = 'AEIOUaeiou'
    for (const str of string) {
        if (vowel.includes(str)) {
            count++
        }
    }
    return count
}

// Example usage
const inputString = "Hello World!";
const result = countVowels(inputString);  // Output: 3
console.log(result);
    