//[1,2,3,4,5]

class LRU<T> {
    #limit: number = 0;
    #queue: T[] = [];
    size: number = 0;
    constructor(limit: number) {
        this.#limit = limit;
    }
    add(item: T) {
        const index: number = this.#queue.findIndex(i => item === i);
        if (index > -1) {
            this.#queue.splice(index,1);
            this.size--;
        } else if (this.size === this.#limit) {
            this.#queue.shift();
            this.size--;
        }
        this.#queue.push(item);
        this.size++;
    }
    [Symbol.toPrimitive](){
        return this.#queue.join('');
    }
}
const l: LRU<string> = new LRU(3);
l.add('1');
l.add('2');
l.add('3');
l.add('2');
