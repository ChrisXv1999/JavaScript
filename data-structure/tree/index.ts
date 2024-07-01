import { TreeNode } from "./tree";
import { bfs } from "./search";
import { compareTree } from "./compare";
import { preOrderTraversal } from "./traversal";
import { diffTree } from "./diff";

const a = new TreeNode('A');
const b = new TreeNode('B');
const c = new TreeNode('C');
const d = new TreeNode('D');
const e = new TreeNode('E');
const f = new TreeNode('F');
const g = new TreeNode('G');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
const cloneA = structuredClone(a);
if(cloneA.left?.left){
    cloneA.left.left.val = 'd';
    cloneA.left.left.left = new TreeNode('H')
    delete cloneA.left.right
}

/**
 * @param root 
 * @returns []
 *      A
 *    B   C
 *   D E F G
 */
cloneA.val = 'a';
console.log(diffTree(a,cloneA));

