array = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
function countFrequency(arr) {
    let map = new Map();

    for (let num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num)+1)
        }else{
            map.set(num,1);
        }
    }
    return map;
}

console.log(countFrequency(array));
l̥