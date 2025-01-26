class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear =  null;
    }

    isEmpty(){
        return this.front==null && this.rear==null
    }

    enqueue(data){
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
            return
        }else{
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue(){
        if (this.isEmpty()) {
            return 'Queue Is Empty'
        }else{
            this.front = this.front.next
            if (this.front===null) {
                this.rear=null;
            }   
        }
    }

    getFront(){
        if (this.isEmpty()) {
            return 'Empty Queue'
        }else{
            return this.front.data
        }
    }

    getRear(){
        if (this.isEmpty()) {
            return 'Empty Queue'
        }else{
            return this.rear.data
        }
    }

    print(){
        let current = this.front;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(8);
queue.dequeue();
queue.dequeue();
queue.print()
console.log('Front:',queue.getFront());
console.log('Rear:',queue.getRear());

 
