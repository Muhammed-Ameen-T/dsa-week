class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    add(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            let temp = this.head
            while (temp.next) {
                temp = temp.next
            }
            temp.next = newNode
        }
    }

    findMax(){
        if (!this.head) {
            return null
        }

        let max = this.head.data;
        let current = this.head;
        while (current) {
            if (current.data > max) {
                max = current.data
            }
            current = current.next
        }
        console.log('Highest Value :',max)
    }

    findMin(){
        if(!this.head) return null;
        let min=this.head.data
        let current = this.head;
        while (current) {
            if (current.data<min) {
                min = current.data
            }
            current = current.next
        }
        console.log('Smallest Value :',min);
    }
    
    print(){
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next
        }
    }

}

let list = new LinkedList;
list.add(3);
list.add(2);
list.add(7);    
list.add(1);
list.add(5);
list.findMax();
list.findMin()
list.print()
