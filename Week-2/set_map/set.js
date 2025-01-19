function findInteraction(arr1,arr2) {
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    let res = new Set();
    for (let num of set1) {
        if (set2.has(num)) {
            res.add(num)
        }
    }
    return [...res]
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 4, 5, 6, 7]; 
console.log(findInteraction(array1, array2)); // Output: [3, 4, 5]

