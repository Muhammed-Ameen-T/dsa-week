// // Node Class
// class ListNode {
//     constructor(data) {
//         this.data = data; // The data the node holds
//         this.next = null; // Pointer to the next node in the list
//     }
// }

// // LinkedList Class
// class MyLinkedList {
//     constructor() {
//         this.head = null; // Head of the list
//         this.size = 0; // Number of nodes in the list
//     }

//     // Method to add a node at the end of the list
//     add(data) {
//         const newNode = new ListNode(data);
//         console.log('New Node: ',newNode);
        

//         // If the list is empty, set the new node as the head
//         if (!this.head) {
//             this.head = newNode;
//         } else {
//             // Traverse to the last node
//             let current = this.head;
//             while (current.next) {
//                 current = current.next;
//             }
//             // Set the next pointer of the last node to the new node
//             current.next = newNode;
//         }
//         this.size++;
//     }

//     // Method to remove a node by its data
//     remove(data) {
//         let current = this.head;
//         let previous = null;
//         console.log('Current: ',current);
//         console.log('Previous: ',previous);
        
        

//         // Traverse the list to find the node to remove
//         while (current) {
//             if (current.data === data) {
//                 // If the node to be removed is the head, update the head
//                 if (!previous) {
//                     this.head = current.next;
//                 } else {
//                     // Otherwise, set the next pointer of the previous node to skip the current node
//                     previous.next = current.next;
//                 }
//                 this.size--;
//                 return current.data; // Return the removed data
//             }
//             previous = current;
//             current = current.next;
//         }
//         return null; // If the data was not found
//     }

//     // Method to print the list
//     print() {
//         let current = this.head;
//         const listData = [];
//         while (current) {
//             listData.push(current.data);
//             current = current.next;
//         }
//         console.log(listData.join(' -> '));
//     }
// }

// console.log('List 1: ')
// // Example usage:
// const list = new MyLinkedList();
// list.add(10);
// list.add(20);
// list.add(30);
// list.add(40)
// list.print(); // Output: 10 -> 20 -> 30

// list.remove(20);
// list.print(); // Output: 10 -> 30

// console.log('List 2: ');

// const list1 = new MyLinkedList();
// list1.add(10);
// list1.add(20);
// list1.add(30);
// list1.print()
// list1.remove(20);
// list1.print()


class ListNode{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class LinkedList{
    constructor() {
        this.head=null
        this.size=0
    }

    add(data){
        const newNode = new ListNode(data);
        
        if (!this.head) {
            this.head = newNode;
        }else{
            let current= this.head
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;        
    }

    remove(data){
        let current =  this.head;
        let previous = null;

        while (current) {
            if (current.data == data) {
                if (!previous) {
                    this.head = current.next
                }else{
                    previous.next = current.next
                }
                this.size--;
                return current.data
            }
            previous = current;
            current = current.next;
        }
        return null
    }

    insertAfter(nextTo,data){
        let newNode = new ListNode(data);
        let temp = this.head;

        while (temp!=null&& temp.data!=nextTo) {
            temp = temp.next;
        }

        if (temp!=null) {
            newNode.next=temp.next;
            temp.next=newNode;
            this.size++
        }
    }

    replace(num,data){
        let newNode = new ListNode(data);
        let temp = this.head;

        while (temp != null && temp.data!= num) {
            temp=temp.next
        }

        if (temp!=null) {
            newNode.next = temp.next
            if (temp === this.head) {
                this.head = newNode
            }else{
                let prev = this.head;
                while (prev.next != temp) {
                    prev = prev.next;
                }
                prev.next = newNode;
            }
            this.size++
        }
    }

    arrayToList(arr){
        arr.forEach(data => {
            this.add(data)
        });
    }

    listToArray(){
        let current = this.head;
        const array = [];
        while (current) {
            array.push(current.data);
            current = current.next;
        }
        return array;
    }

    print(){
        let current = this.head;
        const listData = [];
        while (current) {
            listData.push(current.data);
            current = current.next;
        }
        console.log(listData.join(' -> '));
    }
}

const arr=[1,2,3,4,5];
const list = new LinkedList();
list.arrayToList(arr)
list.add(6)
list.remove(5)
list.replace(2,7)
list.insertAfter(4,5)
list.print()

const array = list.listToArray()
console.log('to Array: ',array)