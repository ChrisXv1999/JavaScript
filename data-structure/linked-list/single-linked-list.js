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
        this.init(Node);
    }
    init(Node){
        this.nodeInstance = new Node();
        this.generateNode = (data)=>{
            return new Node(data)
        };
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
        let current = this.nodeInstance;
        this.nodeInstance.next = this.head;
        for(let i = 0; i <position; i++){
            current = current.next;
        }
        const node = this.generateNode(data);
        const next = current.next
        current.next = node;
        node.next = next;
        this.head = this.nodeInstance.next;
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
    remove(data){
        this.nodeInstance.next = this.head;
        let current = this.nodeInstance;
        let preNode = this.nodeInstance;
        while(current){
            if(current.val === data){
                preNode.next = current.next;
                current = preNode;
                this.size--;
            }
            preNode = current;
            current = current.next;
        }
        this.head = this.nodeInstance.next
    }
    removeAt(position){
        if(position > this.size || position < 0) return false;
        let current = this.nodeInstance;
        this.nodeInstance.next = this.head;
        for(let i = 0; i <position; i++){
            current = current.next;
        }
        current.next = current.next.next;
        this.head = this.nodeInstance.next;
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
list.insert(0,0)
list.insert(1,0)
list.insert(1,0)
list.append(4);
list.remove(0);
console.log(list.getData(1));
console.log('====================================');
console.log(list);
console.log('====================================');