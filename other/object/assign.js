const { assign } = Object;
const a1 = {
    a: 1,
    b: undefined,
    c: null,
}
const a2 = {
    a: 'a',
    b: 'b',
    c: 'c'
}
console.log('====================================');
console.log(assign(a2, a1)); //{ a: 1, b: undefined, c: null }
console.log('====================================');

const b1 = {
    a:1,
    b: {
        a:1,
    }
}
const b2 = {
    a:1,
    b: {
        a:1,
        b:2
    }
}
console.log('====================================');
console.log(assign(b2, b1)); //{ a: 1, b: { a: 1 } }
console.log('====================================');