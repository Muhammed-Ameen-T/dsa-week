function permutate(string) {
    if (string.length <= 1) {
        return [string]
    }

    let result = [];

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let remainingString = string.slice(0, i)  + string.slice(i+1);
        let remainingPermutations = permutate(remainingString);

        for (const permutation of remainingPermutations) {
            result.push(char + permutation);
        }
        
    }
    return result
}
let inputString = "abc";
let result = permutate(inputString);
console.log(result); // Output: [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
