class Node {
    constructor(data) {
        this.data  = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(data){
        const newNode = new Node(data);
        if (!this.head) {
            this.head =  newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++
        return this
    }

    pop(){
        if (!this.head) undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.size++;

        if (this.size===0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }   

    

    shift(){
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.size--;
        if (this.size===0) {
            this.tail=null
        }
        return current
    }

    unshift(data){
        let newNode = new Node(data)
        if (!this.head) {
            this.head=newNode;
            this.tail=newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this
    }

    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.pop();
list.shift();
list.unshift(9)
list.print()