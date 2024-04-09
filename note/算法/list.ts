namespace List {
    /**
     * 链表 和 数组完全互补
     * 一部分用来存数据 一部分用来存引用（下一个地址）
     * 1.在空间上不是连续的
     * 2.每存放一个值都要多开销一个引用空间
     * 优点 只要内存足够大 就能放得下 不用担心空间碎片的问题
     * 添加删除方便 复杂度O(1)
     * 每个节点都认为自己是根节点
     * 查找麻烦 复杂度O(n)
     */
    class Node {
        next: Node | null = null
        value
        constructor(value: number) {
            this.value = value;
            this.next = null;
        }
    }
    function generateNodeList(...rest: any[]): Node {
        let node = new Node(rest[0]);
        let current = node;
        for (let i = 1; i < rest.length; i++) {
            current.next = new Node(rest[i]);
            current = current.next;
        }

        return node
    }
    let head = generateNodeList(1, 2, 3, 4, 5, 6, 7, 8);
    let current: Node | null = head;
    function eachNodeList(head: Node): void {
        console.log(head.value);
        if (!head.next) return;
        eachNodeList(head.next)
    }
    function nodeList2Array(node: Node): any[] {
        if (node.next) {
            return [node.value, ...nodeList2Array(node.next)]
        } else {
            return [node.value]
        }
    }
    /**
     * 链表的逆置
     * a:1 next :b
     * b:2 next :c
     * c:3 next :null
     */

    function reverseNodeList(node:Node):Node {
        if(!node.next) return node;
        function _reverse(current: Node, next: Node):Node {
            let n = next.next;
            next.next = current;
            return n ? _reverse(next, n) : next
        }
        let next = node.next;
        node.next = null;
        return _reverse(node,next)
    }
    console.log(nodeList2Array(reverseNodeList(head)));
    
   

}