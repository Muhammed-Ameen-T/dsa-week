function frequency(arr) {
    let frequency = {}
    for (const num of arr) {
        if (frequency[num]) {
            frequency[num] ++
        }else{
            frequency[num]=1
        }
    }
    return frequency
}

// Example usage
const array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const frequenc = frequency(array);
console.log(frequenc); // Output: { '1': 1, '2': 2, '3': 3, '4': 4 }
