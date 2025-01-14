//! Replace Alphets of given string with another alphabet occurring at the n-th position from each of them.
// function replaceAlphabets(string, n) {
//     let result = [];

//     for (const char of string) {
//         let code = char.charCodeAt(0);
//         if (code >= 65 && code <= 90) { // Uppercase letters
//             let newChar = String.fromCharCode((code - 65 + n) % 26 + 65);
//             result.push(newChar);
//         } else if (code >= 97 && code <= 122) { // Lowercase letters
//             let newChar = String.fromCharCode((code - 97 + n) % 26 + 97);
//             result.push(newChar);
//         } else {
//             result.push(char); // Non-alphabet characters
//         }
//     }
//     return result.join('');
// }

// console.log(replaceAlphabets('Muhammed Ameen', 3)); // Pxkdpphg Dphhq


