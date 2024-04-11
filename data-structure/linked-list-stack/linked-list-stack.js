class Node{
    next = null;
    prev = null;
    constructor(val){
        this.val = val;
    }
}
class LinkedListStack{
    size = 0;
    constructor(){
        const node = new Node();
        this.head = node;
        this.tail = node;
    }
    push(data){
        const node = new Node(data);
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.size++;
    }
    pop(){
        if(this.size === 0) return undefined;
        const node = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null;
        this.size --;
        node.prev = null;
        return node;
    }
    clear(){
        this.head.next = null;
        this.tail.prev = null;
        this.tail.next = null;
        this.size = 0;
    }
    count(){
        return this.size;
    }
    toString(){
        const list = [];
        let current = this.head.next;
        while (current) {
            list.push(current.val);
            current = current.next;
        }
        return list.join('')
    }
}
const stack = new LinkedListStack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
console.log(stack.toString());
