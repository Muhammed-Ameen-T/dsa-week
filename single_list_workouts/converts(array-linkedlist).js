class Node {
    constructor(data) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null;
    }

    // add(data){
    //     let newNode = new Node(data);
    //     if (!this.head) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     }else{
    //         this.tail.next = newNode;
    //         this.tail = newNode;
    //     }
    // }

    add(data){
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
        }else{
            let temp = this.head;
            while (temp.next) {
                temp = temp.next
            }
            temp.next = newNode
        }
    }

    toArray(){
        let arr = [];
        let current = this.head;    
        while (current) {
            arr.push(current.data);
            current=current.next
        }
        return arr
    }

    toList(arr){
        this.head = null;
        this.tail = null;
        for(let num of arr){
            this.add(num)
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

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print();
console.log("To Array",list.toArray());
let arr = [5,4,7,1,3,9,6]
list.toList(arr);
console.log('TO LIST:');
list.print()