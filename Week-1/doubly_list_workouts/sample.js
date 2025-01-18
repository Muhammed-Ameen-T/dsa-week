class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(data){
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

    reversePrint(){
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev
        }
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
console.log("Forward:");
list.print();
console.log("Backward:");
list.reversePrint()