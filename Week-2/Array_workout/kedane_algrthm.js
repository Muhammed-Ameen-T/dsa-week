function kadaneAlgorithm(arr) {
    // Initialize variables to keep track of the maximum sum and the current sum
    let maxCurrent = arr[0];
    let maxGlobal = arr[0];
    
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // Update the current maximum sum by including the current element
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        
        // Update the global maximum sum if the current maximum sum is greater
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }
    
    return maxGlobal;
}

// Example usage
const arr = [1, -2, 3, 10, -4, 7, 2, -5];
console.log("Maximum sum subarray:", kadaneAlgorithm(arr));
