class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }

    findMaxValue(node = this.root) {
        if (!node) {
            return null;
        }
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }

    findMinValue(node = this.root) {
        if (!node) {
            return null;
        }
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    findHeight(node = this.root) {
        if (!node) {
            return 0;
        }
        let leftHeight = this.findHeight(node.left);
        let rightHeight = this.findHeight(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    deleteNode(node, key) {
        if (!node) {
            return null;
        }

        if (key < node.data) {
            node.left = this.deleteNode(node.left, key);
        } else if (key > node.data) {
            node.right = this.deleteNode(node.right, key);
        } else {
            if (!node.left) {
                return node.right;
            } else if (!node.right) {
                return node.left;
            }
            node.data = this.findMinValue(node.right);
            node.right = this.deleteNode(node.right, node.data);
        }
        return node;
    }

    findSecondLargest(node = this.root) {
        if (!node || (!node.right && !node.left)) {
            return null;
        }

        let parent = null;
        let current = node;
        while (current.right) {
            parent = current;
            current = current.right;
        }

        if (current.left) {
            return this.findMaxValue(current.left);
        }
        return parent ? parent.data : null;
    }

    isBST(node = this.root, min = null, max = null) {
        if (!node) {
            return true;
        }

        if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
            return false;
        }

        return (
            this.isBST(node.left, min, node.data) &&
            this.isBST(node.right, node.data, max)
        );
    }
}

// Example usage:
const tree = new BST();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

console.log("Inorder traversal:");
tree.inorder();

console.log('Tree Height:', tree.findHeight());
console.log('Min Value:', tree.findMinValue());
console.log('Max Value:', tree.findMaxValue());
console.log('Is BST:', tree.isBST());

tree.root = tree.deleteNode(tree.root, 10);
console.log("Inorder traversal after deleting 10:");
tree.inorder();

console.log("Second Largest Value:", tree.findSecondLargest()); // Expected output: 13
