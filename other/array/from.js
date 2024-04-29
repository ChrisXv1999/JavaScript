const { isLikeArrayObject ,customIterator} = require('../object/iterator.js')
const isConstructor = function (obj) {
    return obj && typeof obj === 'object' && typeof obj.constructor === 'function'
};
Array.customFrom = function (likeArray, mapFun) {
    const mapping = mapFun !== void 0;
    if (mapping && typeof mapFun !== 'function') {
        throw new TypeError(`${mapFun} must be a function`);
    }
    const usingIterator = likeArray[Symbol.iterator]
    // if(usingIterator && isConstructor(usingIterator)){

    // }
    if(usingIterator) {
        const result = Object.values(likeArray);
        return mapping ? result.map(mapFun) : result;
    }
    if (isLikeArrayObject(likeArray)) {
        const { length } = likeArray;
        let k = 0;
        let result = [];
        while (k < length) {
            result[k] = mapping ? mapFun(void 0, k, result) : void 0;
            k++;
        }
        return result
    }
};
console.log(Array.customFrom([1,2,3,4]));
console.log(Array.customFrom(customIterator({ length: 3 })));
console.log('====================================');
let list = [1,2,3]
console.log(list === Array.customFrom(list));
console.log('====================================');