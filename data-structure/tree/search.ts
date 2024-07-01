import { TreeNode } from "./tree";

function dfs(root:TreeNode|undefined,target:any):boolean{    
    if(!root) return false;
    if(root.val === target) return true
    return dfs(root.left,target) || dfs(root.right,target)
}

function bfs(root:TreeNode|undefined,target:any){
    if(!root) return false;
    const stack:TreeNode[]=[root];
    while(stack.length){
        const current = stack.shift();
        if(current?.val === target) return true
        if(current?.left){
            stack.push(current.left)
        }
        if(current?.right){
            stack.push(current.right);
        }
    }
    return false
    
}
export {
    dfs,
    bfs
}