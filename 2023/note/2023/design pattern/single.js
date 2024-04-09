/**
 * @param {Function} constructorFn 
 * @returns Function
 */
function single(constructorFn) {
    let instance = null;
    return function (...rest) {
        if (!instance) {
            instance = new constructorFn(...rest)
        }
        return instance;
    }
}
function Single(name) {
    if (Single.instance) {
        return Single.instance
    }
    this.name = name;
    Single.instance = this;
}
let s1 = new Single('chris')
let s2 = new Single('xv');
console.log(s1, s2);
function Person(name) {
    this.name = name;
}
Person.prototype.parent = 'person';
const SiglePerson = single(Person);
SiglePerson.prototype.parent = 'SiglePerson'
let p1 = new SiglePerson('chris');
let p2 = new SiglePerson('xv');
console.log(p1.parent, p2.parent);

//问题 原型上的方法会丢失
function Single2() {
    let instance = null;
    this.name = this.name;
    const prototype = Single2.prototype;
    Single2 = function () {
        return instance
    }
    Single2.prototype = prototype;
}
Single2.prototype.parent = 'single2';
let ss1 = new Single2();
let ss2 = new Single2();
console.log(ss2.parent);