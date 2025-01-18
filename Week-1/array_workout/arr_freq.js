let unq=[]
function findFrequency(arr) {
    let frequency = {};
    for (let num of arr) {
        if (frequency[num]) {
            frequency[num]++
        }else{
            frequency[num]=1
        }
    }
    for (const num in frequency) {
        if (frequency[num]==1) {
            unq.push(num)
        }
    }
    return frequency
}

let arr = [1,2,3,2,1,7,7,8,9,2];
const result = findFrequency(arr); 
console.log(result);// { '1': 2, '2': 3, '3': 1, '7': 1, '8': 1, '9': 1 }
console.log('Unique Numbers',unq);
