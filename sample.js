class Stack {
    constructor() {
        this.item = []
    }

    push(data){
        return this.item.push(data);
    }

    pop(){
        if (this.isEmpty()) {
            return 'Underflow'
        }
        return this.item.pop()
    }

    peek(){
        if (this.isEmpty()) {
            return 'Empty Array'
        }
        return this.item[this.item.length-1];
    }

    isEmpty(){
        return this.item.length===0
    }

    size(){
        return this.item.length;
    }

    print(){
        console.log(this.item);
    }
}

let newStack = new Stack();
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.push(4)
newStack.push(5)
newStack.pop()
newStack.print();