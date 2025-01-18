class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.prev = null;
    }

    add(data){
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode
        }
    }

    removeDuplicates(){
        let current = this.head;
        while (current && current.next) {
            if (current.data === current.next.data) {
                let duplicate = current.next;
                current.next = duplicate.next;
                if (duplicate.next) {
                    duplicate.next.prev = current;
                }else{
                    this.tail = current
                }
            }
            current = current.next
        }
    }

    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

// Creating a new DoublyLinkedList and adding nodes
const list = new LinkedList();
list.add(1);
list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(4);

console.log("Original list:");
list.print();

// Removing duplicates
list.removeDuplicates();
console.log("List after removing duplicates:");
list.print();
