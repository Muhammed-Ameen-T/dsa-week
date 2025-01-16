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
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }else{
            let temp = this.head;
            while (temp.next) {
                temp = temp.next
            }
            temp.next=newNode;
        }
    }   

    deleteNode(data){
        if(!this.head) return;

        if (this.head.data===data) {
            this.head=this.head.next
            return 
        }

        let current = this.head;
        let previous = null;
        while (current && current.data!==data) {
            previous = current
            current = current.next;
        }

        if(!current) return;
        previous.next = current.next
    }

    remove(){
        if (!this.head) return null;

        if(!this.head.next){
            let tail = this.head
            this.head=null
            return tail.data
        } 
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous=current
            current=current.next
        }
        previous.next = null; 
        return current.data
    }

    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.deleteNode(4);
list.print()