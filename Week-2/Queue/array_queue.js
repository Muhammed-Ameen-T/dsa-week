class Queue {
    constructor(size) {
        this.items = [];
        this.maxSize = size;
    }

    enqueue(val){
        if (this.items.length==this.maxSize) {
            return 'Overflow'
        }
        return this.items.push(val);
    }

    dequeue(){
        if(this.isEmpty()){
            return 'Underflow'
        }
        return this.items.shift()
    }

    front(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        return this.items[0]
    }

    rear(){
        if(this.isEmpty()){
            return 'Queue is Empty'
        }
        return this.items[this.items.length-1]
    }

    isEmpty(){
        return this.items.length===0
    }

    clear(){
        this.items=[]
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }
}

// Example usage:
const queue = new Queue(3);
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);


console.log('deque',queue.dequeue()); // 10
console.log("front",queue.front());   // 20
console.log('rear',queue.rear());

console.log('size:',queue.size());    // 2
queue.print();                // 20,30