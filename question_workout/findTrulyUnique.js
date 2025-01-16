// let arr = [6,5,4,3,9,8,0]
// let t=10;
// function name(arr,t) {
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[i]+arr[j]==t) {
//                 return [arr[i],arr[j]]    
//             }
//         }   
//     }
// }
// console.log(
//     name(arr,t)
// );


// const arr = [6,2,3,6,7,8,6,4,2,6];
// let total = 6;

// function hello(arr,t) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]==t) {
//             arr.push(t)
//             arr.splice(i,1)
//         }
//     }
//     return arr
// }
// console.log(hello(arr,total));

let arr1=[1,2,4,7,8,5,4];
let arr2=[7,2,4,9,4,7,3];
let comp = [...arr1,...arr2];

//! Frequency truely Unique Elements.
// let frequency={};
// for (let i = 0; i < comp.length; i++) {
//     let num = comp[i];
//     frequency[num]==undefined?frequency[num]=1:frequency[num]++
// }

// let unique=[];
// for (let i = 0; i < comp.length; i++) {
//     let num=comp[i]
//     if (frequency[num]==1) {
//         unique.push(num)
//     }
// }


//! Using Reduce Find Truely Unique Elements
// let res = comp.filter(num=>frequency[num]==1)

// console.log(res);

//! Normal Unique Elements.
// for (let i = 0; i < comp.length; i++) {
//     for (let j = i+1; j < comp.length; j++) { 
//         if (comp[i]===comp[j]) {
//             comp.splice(j,1);
//             j--
//         }
//     }
// }
// console.log(comp);

