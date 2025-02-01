// class HashTable{
//     constructor(size){
//         this.table = new Array(size);
//         this.size = size;
//     }
    
//     hash(key){
//         let hash = 0;
//         for(let i=0;i<key.length;i++){
//             hash = (hash * 31 + key.charCodeAt(i)) % this.size
//         }
//         return hash
//     }
    
//     set(key, value){
//         let i = 0;
//         let c1 = 0;
//         let c2 = 0;
//         let index = this.hash(key);
//         while(this.table[index] && this.table[index][0]!==key){
//             i++
//             index = (this.hash(key) + c2 + i + c2 * i **2)
//         }
//         this.table[index] = [key, value]
//     }
    
//     display(){
//         for(let i=0; i< this.table.length;i++){
//             if(this.table[i]){
//                 console.log(`Bucket ${i}:`,this.table[i])
//             }
//         }
//     }
// }

// let ht = new HashTable(11);
// ht.set('name','Ameen');
// ht.set('age',18);
// ht.set('place','Calicut')
// ht.display()


// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//         this.count = 0
//     }

//     hash(key){
//         let hash =0;
//         let PRIME =31
//         for (let i = 0; i < key.length; i++) {
//             hash= (hash*PRIME+key.charCodeAt(i)) %this.size
//         }
//         return hash 
//     }

//     set(key,value){
//         if(this.count/this.size > 0.7) this.rehash()
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         if(!bucket){
//             this.table[index] = [[key, value]]
//             this.count++
//         }else{
//             for (const item of bucket) {
//                 if (item[0]==key) {
//                     item[1]=value;
//                     return
//                 }
//             }
//             bucket.push([key,value])
//             this.count++
//         }
//     }

//     rehash(){
//         let oldTable = this.table;
//         this.size *=2;
//         console.log('New Size:',this.size);
//         this.table = new Array(this.size);
//         this.count = 0;
//         for (const bucket of oldTable) {
//             if(bucket){
//                 for (let [key,value] of bucket) {
//                     this.set(key,value)
//                 }
//             }
//         }
//     }
    
//     get(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         for (const item of bucket) {
//             if(item[0]==key){
//                 return item[1]
//             }
//         }
//         return 'Not Find'
//     }

//     remove(key){
//         let index = this.hash(key);
//         let bucket = this.table[index];
//         for (let i = 0; i < bucket.length; i++) {
//             if (bucket[i][0]==key) {
//                 let r = bucket[i][0]
//                 bucket.splice(i,1)
//                 this.count--
//                 return `Deleted : ${r}`
//             }
            
//         }
//     }

//     keys(){
//         let keys =[]
//         for (const bucket of this.table) {
//             if (bucket) {
//                 for (const [key,value] of bucket) {
//                    keys.push(key) 
//                 }
//             }
//         } 
//         return keys
//     }

//     values(){
//         let values =[];
//         for (const bucket of this.table) {
//             if (bucket) {
//                 for (const [key,value] of bucket) {
//                     values.push(value)
//                 }
//             }
//         }
//         return values
//     }

//     diplay(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(`Bucket ${i}:`,this.table[i]);
//             }
//         }
//     }

// }

// let ht = new HashTable(3);
// ht.set('name','ameen')
// ht.set('age',18)
// ht.set('place','calicut')
// ht.set('place','kerala')
// console.log(ht.remove('age'))
// console.log('Got:',ht.get('place'))
// console.log('Keys: ',ht.keys())
// console.log('Values: ',ht.values())
// ht.diplay()





// class HashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash1(key){
//         let hash =0;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i)
//         }
//         return hash % this.size
//     }

//     hash2(key){
//         let hash = 0;
//         let PRIME = 31;
//         for (let i = 0; i < key.length; i++) {
//             hash += key.charCodeAt(i)
//         }
//         return PRIME - (hash % PRIME)
//     }

//     set(key, value){
//         let index = this.hash1(key);
//         let resize = this.hash2(key);
//         let i = 0;
//         while (this.table[index] && this.table[index][0]!==key) {
//             index = (this.hash1(key) + i + resize) % this.size
//             i++
//         }
//         this.table[index] = [key,value]
//     }

//     get(key){
//         let index = this.hash1(key);
//         let stepSize = this.hash2(key)
//         let i=0
//         while (this.table[index] && this.table[index][0]!==key) {
//             index = (this.hash1(key) + i + stepSize) % this.size
//             i++
//         }
//         return this.table[index] ? this.table[index][1] : undefined
//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(`Bucket ${i}: `,this.table[i]);
//             }
//         }
//     }
// }

// let ht = new HashTable(18);
// ht.set('name','Ameen')
// ht.set('age',18)
// ht.set('place','calicut')
// ht.set('city','Kerala')
// ht.set('country','India')
// console.log('Got:',ht.get('place'))
// ht.display()


// class Queue {
//     constructor() {
//         this.item = []
//     }

//     addFirst(x){
//         return this.item.unshift(x)
//     }

//     addLast(x){
//         return this.item.unshift(x);
//     }

//     deleteFirst(){
//         return this.item.shift()
//     }

//     deleteLast(){
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length===0
//     }

//     size(){
//         return this.item.length
//     }

//     print(){
//         return this.item
//     }
// }

// let q = new Queue();
// q.addFirst(1);
// q.addFirst(2);
// q.addFirst(3);
// q.addFirst(4);
// q.addFirst(5);
// q.addFirst(6);
// q.addLast(9);
// console.log('Queue:',q.print())
// console.log('Size:',q.size())
// console.log('Is Empty:',q.isEmpty())
// console.log('Deleted:',q.deleteLast())
// console.log('Deleted:',q.deleteFirst())
// console.log('Queue:',q.print())



// class Stack {
//     constructor() {
//         this.item=[]
//     }

//     push(x){
//         this.item.push(x)
//     }

//     pop(){
//         if (this.isEmpty()) {
//             return 'Empty'
//         }
//         return this.item.pop()
//     }

//     isEmpty(){
//         return this.item.length === 0
//     }

//     peek(){
//         return this.item[this.item.length-1]
//     }

//     print(){
//         return this.item
//     }
// }

// let stack = new Stack();
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)
// console.log('Stack:',stack.print())
// console.log('Popped:',stack.pop())
// console.log('Stack:',stack.print())
// console.log('Peek:',stack.peek())
// console.log('Is Empty:',stack.isEmpty())



// function insertionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let key = arr[i];
//         let j=i-1;
//         while (j>=0 && arr[j]>key) {
//             arr[j+1]=arr[j];
//             j--
//         }
//         arr[j+1]=key        
//     }
//     return arr
// }

// let arr=[4,2,6,13,1,3];
// console.log(insertionSort(arr));


// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i+1; j < arr.length; j++) {
//             if (arr[j]<arr[minIndex]) {
//                 minIndex=j
//             }            
//         }
//         if (minIndex!==i) {
//             let temp = arr[minIndex];
//             arr[minIndex]=arr[i];
//             arr[i]=temp
//         }
//     }
//     return arr
// }
// let arr=[4,2,6,13,1,3];
// console.log(selectionSort(arr));

// function quickSort(arr) {
//     if (arr.length<=1) {
//         return arr
//     }
//     let pivot = arr[arr.length-1]
//     let left=[]
//     let right=[];
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i]<pivot) {
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// let arr=[4,2,6,13,1,3];
// console.log(quickSort(arr));


// function mergeSort(arr) {
//     if (arr.length<=1) {
//         return arr
//     }
//     let mid = Math.floor(arr.length/2);
//     let left = arr.slice(0,mid);
//     let right = arr.slice(mid);
//     return merge(mergeSort(left),mergeSort(right));
// }

// function merge(left,right) {
//     let sorted = [];
//     while (left.length && right.length) {
//         if (left[0] < right[0]) {
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// let arr=[4,2,6,13,1,3];
// console.log(mergeSort(arr));

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length-i-1; j++) {
//             if (arr[j]>arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1]=temp
//             }
            
//         }
//     }
//     return arr
// }

// let arr=[4,2,6,13,1,3];
// console.log(bubbleSort(arr));


// function factorial(n) {
//     let fib = [0,1];
//     for (let i = 2; i < n; i++) {
//         fib[i] = fib[i-1]+fib[i-1]
        
//     }
//     return fib
// }

// console.log(factorial(5));


// class Queue{
//     constructor(){
//         this.item = []
//     }

//     enqeue(x){
//         this.item.push(x)
//     }

//     dequeue(){
//         if (this.isEmpty()) {
//             return "Empty Queue"
//         }
//         return this.item.shift()
//     }

//     isEmpty(){
//         return this.item.length ===0
//     }

//     print(){
//         if(this.isEmpty()){
//             return 'Empty Stack';
//         }
//         return this.item
//     }
// }

// let q = new Queue();
// q.enqeue(1)
// q.enqeue(2)
// q.enqeue(3)
// q.enqeue(4)
// q.enqeue(5)
// q.enqeue(6)
// console.log(q.print())
// console.log(q.dequeue())
// console.log(q.print())


// function fibinocci(n) {
//     if (n<=1) {
//         return n
//     }
//     return fibinocci(n-1) + fibinocci(n-2)
// }
// console.log(fibinocci(7));


class Stack {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x){
        this.stack1.push(x)
    }

    dequeue(){
        if(this.stack2.length==0){
            while (this.stack1.length>0) {
                this.stack2.push(this.stack1.pop())
            }
        }
        return this.stack2.pop()
    }

    print(){
        console.log(this.stack2);
    }
}

let stack = new Stack();
stack.enqueue(1);
stack.enqueue(2);
stack.enqueue(3);
stack.enqueue(4);
stack.enqueue(5);
console.log('Deleted:',stack.dequeue());
stack.print()