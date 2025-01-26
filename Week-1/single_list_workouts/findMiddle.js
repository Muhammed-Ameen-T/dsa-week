class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    findMiddle(){
        let fast =  this.head;
        let slow = this.head
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next
        }
        return slow ? slow.value : null
    }
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

const middle = list.findMiddle();
console.log(`The middle element is: ${middle}`);  // Output: The middle element is: 3


