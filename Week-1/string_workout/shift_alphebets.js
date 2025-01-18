function shiftAlphabet(string,n) {
    let result = "";
    for (const str of string) {
        let char = str
        if (/[a-zA-Z]/.test(char)) {
            let base = char == char.toUpperCase()? 65 : 97;
            char = String.fromCharCode((char.charCodeAt(0)-base+n)%26+base);
        }
        result+=char
    }
    return result
}

const originalString = "Hello World!"; 
const shiftValue = 3; 
const newString = shiftAlphabet(originalString, shiftValue); 
console.log(newString); // Khoor Zruog!