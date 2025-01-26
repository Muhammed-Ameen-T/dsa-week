    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    }

    class Stack {
        constructor() {
            this.head = null
        }

        isEmpty(){
            this.head === null;
        }

        push(data){
            const newNode = new Node(data)
            newNode.next = this.head;
            this.head = newNode
            return this.head
        }

        pop(){
            if (this.isEmpty()) {
                return 'Empty Linked List'
            }else{
                let temp = this.head;
                this.head = this.head.next;
                temp = null
                return;
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

    const stack = new Stack();
    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.pop()
    stack.print()