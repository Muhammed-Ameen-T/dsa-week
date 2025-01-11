class Node {
    constructor(data) {
        this.data = data;
        this.next = null; // Initially, the node does not point to any other node
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // New node becomes the head if the list is empty
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode; // Add the new node at the end (tail) of the list
        }
    }

    removeDuplicates() {
        let current = this.head;
        while (current != null) {
            let next = current.next;
            while (next != null && next.data == current.data) {
                next = next.next;
            }
            current.next = next;
            current = next;
        }
    }

    addFirst(data){
        let newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
    }

    remove(data){
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.data === data) {
                if (!previous) {
                    this.head= current.next
                }else{
                    previous.next = current.next;
                }
                return current.data
            }
            previous = current;
            current = current.next;
        }
        return null;
    }

    removeFirst(){
        if (this.head) {
            this.head=this.head.next;
        }
    }

    removeLast(){
        if (!this.head) {
            return null
        }
        if (!this.head.next) {
            const tail = this.head
            this.head = null
            return tail.data;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        previous.next = null;
        return current.data;
    }

    print() {
        let temp = this.head;
        const listData = [];
        while (temp) {
            listData.push(temp.data);
            temp = temp.next;
        }
        console.log('List:', listData.join(' -> '));
    }
}

const list = new LinkedList();
list.add(1); 
list.add(2); 
list.add(2);
list.add(3); 
list.add(3);
list.add(4)
list.add(5);
list.add(6); 
list.addFirst(0)
list.removeDuplicates();
list.remove(6)
list.removeFirst()
list.removeLast()
list.print();  