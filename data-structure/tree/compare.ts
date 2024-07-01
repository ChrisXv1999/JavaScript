import { TreeNode } from "./tree";

function compareTree(root1:TreeNode| undefined,root2: TreeNode | undefined):boolean{
    if(root1 === root2) return true
    if(!root1 || !root2) return false
    if(root1.val !== root2.val) return false 
    return compareTree(root1.left,root2.left) && compareTree(root1.right,root2.left)
}
export {
    compareTree
}