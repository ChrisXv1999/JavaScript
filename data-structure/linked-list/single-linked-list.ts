type SetVal<T> = (val:T)=>Boolean;
class Node<T> {
    private val: T;
    next: Node<T> | null;
    constructor(val: T) {
        this.val = val;
        this.next = null;
    }
    setVal:SetVal<T>=(val)=>{
        this.val = val;
        return true
    }
}

class SingleLinkedList<T>{
    head?:T;
    tail?:T;
    constructor(n:T) {
    }
}
// const list = new SingleLinkedList<Node<string>>(Node<string>)
