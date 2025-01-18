function isPalindrome(string) {
    let rev = string.split('').reverse().join('');
    return string===rev
}

// Example usage
const inputString = "madam";
const result = isPalindrome(inputString);  // Output: true
console.log(result);
