import {TreeNode} from './tree'
function revertTree(preOrder: any[] | undefined, inOrder: any[], postOrder: any[] | undefined, Node = TreeNode) {
    if (!inOrder || !(preOrder || postOrder)) {
        return new Node('')
    }
    if (preOrder) {
        const rootVal = preOrder.shift();
        const root = new Node(rootVal);
        const rootIdx = inOrder.findIndex(val => val === rootVal);
        const leftPreOrder = preOrder.splice(0, rootIdx);
        const leftInOrder = inOrder.splice(0, rootIdx);
        const rightInOrder = inOrder.splice(1);
        if (leftPreOrder.length) {
            root.left = revertTree(leftPreOrder, leftInOrder, undefined);
        }
        if (preOrder.length) {
            root.right = revertTree(preOrder, rightInOrder, undefined);
        }
        return root;
    } 
    if(postOrder) {
        const rootVal = postOrder.pop();
        const root = new Node(rootVal);
        const rootIdx = inOrder.findIndex(val => val === rootVal);
        const leftPostOrder = postOrder.splice(0, rootIdx);
        const leftInOrder = inOrder.splice(0, rootIdx);
        const rightInOrder = inOrder.splice(1);
        if (leftPostOrder.length) {
            root.left = revertTree(undefined, leftInOrder, leftPostOrder);
        }
        if (postOrder.length) {
            root.right = revertTree(undefined, rightInOrder, postOrder);
        }
        return root;
    }
}