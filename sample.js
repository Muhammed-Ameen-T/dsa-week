class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to hold queue elements
    }

    // Enqueue an element into the queue
    enqueue(element) {
        this.items.push(element); // Add element to the end of the queue
    }

    // Dequeue an element from the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue Underflow: Cannot dequeue from an empty queue.");
        }
        return this.items.shift(); // Remove and return the front element
    }

    // Get the front element of the queue
    front() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty: Cannot retrieve front.");
        }
        return this.items[0]; // Return front element without removing it
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0; // Return true if empty, false otherwise
    }

    // Get size of queue
    size() {
        return this.items.length; // Return number of elements in the queue
    }

    // Print all elements in the queue
    print() {
        return this.items.join(" "); // Join elements with a space for display
    }
}

// Example usage:
const myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
console.log(myQueue.print());      // Output: 10 20 30
console.log(myQueue.front());       // Output: 10
console.log(myQueue.dequeue());     // Output: 10
console.log(myQueue.print());       // Output: 20 30
console.log(myQueue.size());        // Output: 2
