class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    
    addToEnd(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    addToFront(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertAfter(x, data) {
        let current = this.head;
        let newNode = new Node(data);
        while (current) {
            if (current.data === x) {
                newNode.next = current.next;
                newNode.prev = current;
                if (current.next !== null) {
                    current.next.prev = newNode;
                } else {
                    this.tail = newNode;
                }
                current.next = newNode;
                return;  // Exit the function after insertion
            }
            current = current.next;
        }
        console.log(`Node with data ${x} not found.`);
    }

    insertBefore(x,data){
        let current = this.head;
        while (current) {
            if (current.data === x) {
                let newNode = new Node(data);
                newNode.next = current;
                newNode.prev = current.prev;
                if (current.prev !== null) {
                    current.prev.next =  newNode;
                }else{
                    this.head = newNode;
                }
                current.prev = newNode;
            }
        }
    }

    printForward() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    printBackward() {
        let current = this.tail;
        while (current) {
            console.log(current.data);
            current = current.prev;
        }
    }
}

const list = new DoublyLinkedList();
list.addToEnd(1);
list.addToEnd(2);
list.addToEnd(3);
list.addToEnd(4);
list.addToEnd(5);

console.log("Print forward:");
list.printForward();

list.insertAfter(3, 10);
console.log("After inserting 10 after 3:");
list.printForward();

console.log("Print backward:");
list.printBackward();