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
    }

    add(data){
        let newNode = new Node(data);
        let current = this.head;
        if(!this.head){
            this.head = newNode
            return;
        } 
        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    addAfter(x,data){
        let newNode = new Node(data);
        let current = this.head;
        while (current) {
            if (current.data===x) {
                newNode.next = current.next;
                current.next = newNode;
                break;
            }
            current = current.next
        }
    }

    addBefore(x,data){
        let newNode =  new Node(data);
        let current = this.head;
        if (this.head.data ===x) {
            newNode.next = this.head
            this.head = newNode
            return
        }
        while (current.next && current.next.data !== x) {
            current = current.next
        }
        if (current.next) {
            newNode.next = current.next;
            current.next = newNode;
        }
    }

    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

    toList(arr){
        this.head = null;
        this.tail = null;
        for (const num of arr) {
            this.add(num)
        }
    }
}

let list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.addAfter(3,6);
list.addBefore(2,9)
list.print()
console.log('ToList: ');

let arr =  [9,8,7,6,5]
list.toList(arr)
list.print()
