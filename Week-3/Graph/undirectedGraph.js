class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex){
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2){
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(val => val !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(val => val !== vertex1);
        }
    }

    removeVertex(vertex){
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                const adjacentVertex = this.adjacencyList[vertex].pop();
                this.removeEdge(vertex, adjacentVertex);
            }
            delete this.adjacencyList[vertex]
        }
    }

    depthFirstSearch(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex) {
            if (!vertex) {
                return null
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start);
        return result
    }

    breadthFirstSearch(start){
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            let currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        console.log('Adjacency List:',this.adjacencyList);
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