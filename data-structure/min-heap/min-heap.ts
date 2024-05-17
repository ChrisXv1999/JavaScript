
interface MinHeapInterface{
    heap: number[];
    insert(value: number): void;
    pop(): number|undefined;
    peek(): number|undefined;
}
/**
 * @class MinHeap
 * @member {number[]} heap 
 * @method insert
 * @method pop
 * @method peek
 * @example
 * const minHeap = new MinHeap();
 */
class MinHeap implements MinHeapInterface {
    heap: number[];
    constructor() {
        this.heap = [];
    }
    insert(value: number): void {
        this.heap.push(value);
        this.shiftUp();
    }
    pop(): number|undefined {
        const value = this.heap[0];
        this.shiftDown();
        return value
    }
    peek(): number|undefined {
        return this.heap[0]
    }
    shiftUp(){
        let curIdx = this.heap.length - 1;
        while (curIdx > 0) {
            const parentIdx = curIdx >> 1;
            if(this.compare(curIdx, parentIdx) === -1){
                this.swap(curIdx, parentIdx);
            }
            curIdx = parentIdx;
        }
    }
    shiftDown(){
        let curIdx = 0;
        while(curIdx < this.heap.length){
            const leftIdx = curIdx * 2 + 1;
            const rightIdx = curIdx * 2 + 2;
            
            let swapIdx = leftIdx;
            if(this.compare(rightIdx, leftIdx) === -1){
                swapIdx = rightIdx;
            }
            this.swap(curIdx, swapIdx)
            curIdx = swapIdx;
        }
    }
    swap(curIdx:number, parentIdx:number){
        [this.heap[curIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[curIdx]]
    }
    // 比较 
    compare(curIdx:number, parentIdx:number):number{
        if(this.heap[curIdx] === this.heap[parentIdx])return 0;
        if(this.heap[curIdx] < this.heap[parentIdx])return -1;
        return 1;
    }
}
const mh:MinHeap = new MinHeap();

mh.insert(3);
mh.insert(6);
mh.insert(9);
mh.insert(43);
mh.insert(23);
mh.insert(2);
mh.insert(1);
mh.insert(33);
mh.pop();
console.log(mh.heap);
console.log(mh.heap.length);