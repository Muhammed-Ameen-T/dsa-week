function reverseWords(string) {
    let words = string.split(' ');
    let result = []
    for (const str of words) {
        let rev=str.split('').reverse().join('')
        result.push(rev)
    }
    return result.join(' ')
}

// Example usage
const inputString = "Hello World!";
const result = reverseWords(inputString);  // Output: "olleH !dlroW"
console.log(result);
