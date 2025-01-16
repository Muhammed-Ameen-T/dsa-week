class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
    }

    removeDuplicates() {
        let current = this.head;

        while (current && current.next) {  // Only check for current.next
            if (current.data === current.next.data) {
                current.next = current.next.next;  // Skip the duplicate node
            } else {
                current = current.next;  // Move to the next node
            }
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const list = new SinglyLinkedList();
list.add(1);
list.add(1);
list.add(2);
list.add(3);
list.add(3);
list.add(4);

console.log("Original list:");
list.print();

list.removeDuplicates();
console.log("List after removing duplicates:");
list.print();
