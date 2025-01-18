function removeVowels(string) {
    let result = '';
    let vowels = 'aeiouAEIOU'
    for (let str of string) {
        if (!vowels.includes(str)) {
            result+=str
        }
    }
    return result
}
// Example usage
const inputString = "Hello World!";
const result = removeVowels(inputString);
console.log(result);  // Output: "Hll Wrld!"