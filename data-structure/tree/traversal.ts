import { TreeNode } from "./tree";
// 实现不需要递归的前中后序遍历
function preOrderTraversal(root: TreeNode): any[] {
    if (root === undefined || root === null) return [];
    const ans: any[] = [];
    const nodeList: TreeNode[] = [root];
    while (nodeList.length) {
        const current = nodeList.pop();
        if (!current) continue;
        ans.push(current.val)
        if (current.right) {
            nodeList.push(current.right);
        }
        if (current.left) {
            nodeList.push(current.left);
        }
    }
    return ans
}

function inOrderTraversal(root: TreeNode) {
    if (root === undefined || root === null) return [];
    const ans: any[] = [];
    const nodeList: TreeNode[] = [root];
    const set = new Set<TreeNode>();
    while (nodeList.length) {
        const current = nodeList.pop();
        if (!current) continue;

        if (current.right && !set.has(current)) {
            nodeList.push(current.right)
        }
        if (current.left && !set.has(current)) {
            nodeList.push(current);
            nodeList.push(current.left);
        } else {
            ans.push(current.val);
        }
        set.add(current);
    }
    return ans

}

function postOrderTraversal(root: TreeNode) {
    if (root === undefined || root === null) return [];
    const ans: any[] = [];
    const nodeList: (TreeNode | undefined)[] = [root];
    const set = new Set<TreeNode>();
    while (nodeList.length) {
        const current = nodeList.pop();
        if (!current) continue;
        if ((current.right || current.left) && !set.has(current)) {
            set.add(current);
            nodeList.push(current)
            nodeList.push(current.right)
            nodeList.push(current.left)
        } else {
            ans.push(current.val);
        }
    }
    return ans
}
export {
    preOrderTraversal,
    inOrderTraversal,
    postOrderTraversal
}