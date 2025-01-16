class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;  // Reference to the previous node
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;  // Reference to the last node
    }
    
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;  // Initialize tail
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;  // Update tail
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    printReverse() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

// Example usage
const list = new DoublyLinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
console.log("Forward:");
list.print();
console.log("Backward:");
list.printReverse();
