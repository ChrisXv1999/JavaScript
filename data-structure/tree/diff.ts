import { TreeNode } from "./tree";
enum TypeEnum {
    ADD,
    DELETE,
    UPDATE
}
interface DiffType {
    type: TypeEnum,
    origin?:any,
    now?:any
}

function diffTree(root1:TreeNode|undefined,root2:TreeNode|undefined,diffList:DiffType[]=[]){
    if(!root1 && !root2)return []
    if(root1 && !root2){
        diffList.push({
            type: TypeEnum.DELETE,
            origin: root1,
            now: undefined
        })
    }else if(!root1 && root2){
        diffList.push({
            type: TypeEnum.ADD,
            origin: undefined,
            now: root2
        })
    }else if(root1?.val !== root2?.val){
        diffList.push({
            type: TypeEnum.UPDATE,
            origin: root1?.val,
            now: root2?.val
        })
        diffTree(root1?.left,root2?.left,diffList);
        diffTree(root1?.right,root2?.right,diffList);
    }else {
        diffTree(root1?.left,root2?.left,diffList);
        diffTree(root1?.right,root2?.right,diffList);
    }
    return diffList
}
export {
    diffTree
}