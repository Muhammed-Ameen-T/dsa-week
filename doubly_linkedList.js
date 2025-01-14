class Node {
    constructor(data) { 
        this.data = data;
        this.next = null;  
    }
}

class LinkedList {
    constructor() {
        this.head=null;
    }
    
    add(data){
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }else{
            let temp = this.head
            while (temp.next) {
                temp=temp.next
            }
            temp.next = newNode;
        }
    }

    print(){
        let current = this.head
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }
}

const list = new LinkedList()
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print();