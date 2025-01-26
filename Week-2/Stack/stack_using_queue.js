class Stack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(data){
        this.q1.push(data);
    }

    pop(){
        if (this.q1.length ==0) {
            return 'Empty'
        }
        while (this.q1.length>1) {
            this.q2.push(this.q1.shift())
        }
        let first = this.q1.shift()
        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp
        return first
    }

    isEmpty(){
        return this.q1.length === 0;
    }

    size(){
        return this.q1.length;
    }

    top(){
        return this.q1.length > 0 ? this.q1[0] : null;
    }

    display(){
        console.log(this.q1);
    }
}

// Example usage
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);
s.push(4);
s.display(); // Output: [1, 2, 3, 4]
console.log('Pop:', s.pop()); // Output: Pop: 1
s.display(); // Output: [2, 3, 4]
console.log('Pop:', s.pop()); // Output: Pop: 2
s.display(); // Output: [3, 4]
