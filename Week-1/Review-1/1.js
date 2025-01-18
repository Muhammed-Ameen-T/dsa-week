// function factorial(n) {
//     if(n==1) return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(5));

// function binarySerch(arr,data) {
//     let left = 0;
//     let right = arr.length;
//     while (left<=right) {
//         let mid = Math.floor((left+right)/2)
//         if (arr[mid]==data) {
//             return mid
//         }else if(arr[mid]<data){
//             left=mid+1;
//         }else{
//             right=mid-1
//         }
//     }
//     return -1
// }

// let arr=[1,2,3,4,5,6];
// console.log(binarySerch(arr,3));


// class Node {
//     constructor(data) {
//         this.data = data;
//         this.next = null;
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.prev = null;
//     }
//     add(data){
//         let newNode = new Node(data);
//         if(!this.head){
//             this.head = newNode
//             this.tail = newNode;
//             return
//         }
//         let current = this.head;
//         while (current.next) {
//             current = current.next
//         }
//         current.next=newNode
//         return
//     }

//     remove(){
//         if(!this.head) return;
//         if(!this.head.next){
//             this.head = null
//             return
//         }

//         let current = this.head;
//         while (current.next) {
//             current=current.next
//         }
//         current = null;
//         return
//     }

//     print(){
//         let current = this.head;
//         while (current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }

//     reverse(){
//         let current = this.tail;
//         while (current.next) {
//             current= current.prev;
//         }
//     }
// }