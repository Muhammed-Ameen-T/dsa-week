class Graph {
    constructor() {
        this.aList = []
    }

    addVertex(vertex){
        if (!this.aList[vertex]) {
            this.aList[vertex] = []
        }
    }

    addEdge(vertex1,vertex2){
        if (this.aList[vertex1] && this.aList[vertex2]) {
            this.aList[vertex1].push(vertex2);
            this.aList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2){
        if (this.aList[vertex1] && this.aList[vertex2]) {
            this.aList[vertex1] = this.aList[vertex1].filter(val => val!=vertex2);
            this.aList[vertex2] = this.aList[vertex2].filter(val => val!=vertex1);
        }
    }

    removeVertex(vertex){
        if (this.aList[vertex]) {
            while (this.aList[vertex].length) {
                let ad = this.aList[vertex].pop();
                this.removeEdge(ad,vertex)
            }
            delete this.aList[vertex]
        }
    }

    depthFirstSearch(start){
        let result = [];
        let stack = [start];
        let visited = {};
        visited[start] = true;
        while (stack.length) {
            let current = stack.pop();
            result.push(current)
            this.aList[current].forEach(element => {
                if (!visited[element]) {
                    visited[element] = true;
                    stack.push(element)
                }
            });
        }
        return result
    }

    breadthFirstSearch(start){
        let result = [];
        let visited = {};
        let queue = [start];
        visited[start] = true;
        while (queue.length) {
            let current = queue.shift()
            result.push(current);
            this.aList[current].forEach(element => {
                if (!visited[element]) {
                    visited[element] = true;
                    queue.push(element)
                }
            });
        }
        return result
    }
}


const graph = new Graph();
// Adding vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Adding edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log('BFS',graph.breadthFirstSearch('A'));
console.log('DFS',graph.depthFirstSearch('A'));

console.log('After Removing:');
graph.removeVertex('A');

console.log('BFS',graph.breadthFirstSearch('B'));
console.log('DFS',graph.depthFirstSearch('B'));
