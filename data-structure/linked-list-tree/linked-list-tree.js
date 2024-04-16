class Node {
    left = null;
    right = null;
    constructor(val) {
        this.val = val;
    }
}
// add pop
class LinkedListTree {
    size = 0;
    root = null;
    tail = null;
    constructor() {
    }
    add(data) {
        const node = new Node(data);
        if (this.size === 0) {
            this.root = node;
            this.tail = node;
        } else {
            if (this.tail.left === null) {
                this.tail.left = node;
            } else {
                this.tail.right = node;
                this.updateTail()
            }
        }
        this.size++;
        return this
    }
    //实现一个广度优先的算法 bfs 修正tail
    updateTail() {
        let currentNode= this.root;
        let queue = [currentNode];
        while (queue.length > 0) {
            currentNode = queue.shift();
            if (currentNode.left === null || currentNode.right === null){
                this.tail = currentNode || currentNode;
                return;
            }
            currentNode.left && queue.push(currentNode.left)
            currentNode.right && queue.push(currentNode.right)
        }
    }
    toString(){
        const list = [];
        const queue = [this.root];
        while (queue.length > 0) {
            const currentNode = queue.shift();
            list.push(currentNode.val);
            currentNode.left && queue.push(currentNode.left)
            currentNode.right && queue.push(currentNode.right)
        }
        return list.join('')
    }
    preOrder(){
        const list = [];
        function _preOrder(node){
            if(!node)return
            
        }
        _preOrder(this.root)
        return list
    }
    inOrder(){
        
    }
    postOrder(){

    }

}
const tree = new LinkedListTree();
tree.add(0).add(1).add(2).add(3)
.add(4).add(5).add(6)
console.log(tree.preOrder());
