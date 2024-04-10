class Node{
    next = null;
    constructor(val){
        this.val = val;
    }
}
class SingleLinkedList{
    head = null;
    tail = null;
    size = 0;
    constructor(Node){
        this.Node = Node;
    }
    generateNode(data){
        const node = new this.Node(data);
        return node
    }
    append(data){
        const node = this.generateNode(data);
        if(this.head === null) {
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
        }
        this.tail = node;
        this.size ++ ;
    }
    insert(position,data){
        if(position > this.size || position < 0) return false;
        let current = this.head;
        for(let i = 1; i <position; i++){
            current = current.next;
        }
        const node = this.generateNode(data);
        const next = current.next
        current.next = node;
        node.next = next;
        this.size ++;
        return true;
    }
    getData(position){
        if(position > this.size || position < 0) return undefined;
        let current = this.head;
        for(let i = 0; i <position; i++){
            current = current.next;
        }
        return current.val
    }
    indexOf(data){
        let idx = 0;
        let current = this.head;
        while(current) {
            if(current.val === data) return idx;
            idx++;
            current = current.next;
        }
        return -1
    }
    update(position,data){
        if(position > this.size || position < 0) return false;
        let current = this.head;
        for(let i = 0; i <position; i++){
            current = current.next;
        }
        current.val = data;
        return true;
    }
    //未实现
    remove(data){
        let current = this.head;
        let preNode = this.head;
        while(current){
            if(current.val === data){
                preNode.next = current.next;
                current = preNode;
            }
            current = current.next;
            preNode = current;
        }
    }
    removeAt(position){
        if(position > this.size || position < 0) return false;
        let current = this.head;
        for(let i = 0; i <position - 1; i++){
            current = current.next;
        }
        current.next = current.next.next;
        this.size --;
    }
    toString(){
        const list = [];
        let current = this.head;
        while(current){
            list.push(current.val);
            current= current.next;
        }
        return list.join('');
    }
    count(){
        return this.size;
    }
    isEmpty(){
        return this.size === 0;
    }
}
const n1 = new Node(1);
const list = new SingleLinkedList(Node);
list.append(1);
list.append(3);
list.insert(1,2)
list.append(4);
console.log(list.getData(1));
console.log('====================================');
console.log(list);
console.log('====================================');