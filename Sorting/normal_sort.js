function Sorting(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]>arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const numbers = [38, 27, 43, 3, 9, 82, 10]; 
const sortedNumbers = Sorting(numbers); 
console.log(sortedNumbers);