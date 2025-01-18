function capitalize(arr) {
    return arr.map(str=>str.charAt(0).toUpperCase()+str.slice(1));
}

let stringsArray = ["hello", "world", "this", "is", "javascript"];
console.log(capitalize(stringsArray));
