let string = "Hello World!";
let split =string.split(' ')
let res = []
for (const str of split) {
    let result = ''
    for (let i=str.length-1; i>=0; i--) {
        result+=str[i]
    }
    res.push(result)
}
console.log(res.join(' '));
