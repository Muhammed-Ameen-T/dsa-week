function alternateCase(string) {
    let result = ""
    for (const str of string) {
        if (str===str.toUpperCase()) {
            result+=str.toLowerCase();
        }else{
            result+=str.toUpperCase();
        }
    }
    return result
}

// Example usage
const inputString = "Hello World!";
const result = alternateCase(inputString);  // Output: "hELLO wORLD!"
console.log(result);
