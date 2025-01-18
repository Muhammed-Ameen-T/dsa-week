function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        // Find the index of the smallest element in the unsorted part
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the smallest element with the first element of the unsorted part
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}

// Example usage:
let arr = [2, 3, 1, 6, 4, 9, 7];
console.log(selectionSort(arr)); // Output: [1, 2, 3, 4, 6, 7, 9]
