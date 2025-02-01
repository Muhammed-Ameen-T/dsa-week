class Node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(data){
        const newNode = new Node(data);
        if (!this.root) {
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode){
        if (newNode.data<node.data) {
            if (!node.left) {
                node.left = newNode
            }else{
                this.insertNode(node.left,newNode)   
            }
        }else{
            if (!node.right) {
                node.right = newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    inorder(node){
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right)
        }
    }

    preorder(node){
        if (node) {
            console.log(node.data);
            this.preorder(node.left)
            this.preorder(node.right)
        }
    }

    postorder(node){
        if (node) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    getLength(node = this.root){
        if (!node) {
            return 0
        }
        return 1 + this.getLength(node.left) + this.getLength(node.right)
    }

    getHeight(node = this.root){
        if (!node) {
            return -1
        }else{
            const leftHeight = this.getHeight(node.left);
            const rightHeight = this.getHeight(node.right);
            return Math.max(leftHeight,rightHeight) +1;
        }
    }

    findMinValue(node=this.root){
        if (!node) {
            return null
        }
        while (node.left) {
            node = node.left
        }
        return node.data;
    }

    findMaxValue(node=this.root){
        if (!node) {
            return null
        }
        while (node.right) {
            node=node.right
        }
        return node.data
    }

    deleteNode(node, key){
        if (!node) {
            return null
        }

        if (key < node.data) {
            node.left =  this.deleteNode(node.left,key)
        }else if(key > node.data){
            node.right = this.deleteNode(node.right, key)
        }else{
            if (!node.left) {
                return node.right
            }else if(!node.right){
                return node.left
            }

            node.data = this.findMinValue(node.right);
            node.right = this.deleteNode(node.right, node.data)
        }
        return node;
    }
}

// Example usage:
const tree = new BinaryTree();
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
tree.inorder(tree.root);

console.log("Preorder traversal:");
tree.preorder(tree.root);

console.log("Postorder traversal:");
tree.postorder(tree.root);


console.log('Tree Length:',tree.getLength());
console.log('Tree Height:',tree.getHeight());
console.log('Min Value:',tree.findMinValue());
console.log('Max Value:',tree.findMaxValue());



tree.root = tree.deleteNode(tree.root,8)
console.log("Inorder traversal after deleting 10:");
tree.inorder(tree.root);


