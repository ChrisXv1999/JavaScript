function customIterator(obj){
    obj[Symbol.iterator] = function () {
        const values = Object.values(this);
        const { length } = values;
        let k = 0;
        return {
            next: function () {
                return {
                    value: values[k++],
                    done: k > length,
                };
            }
        };
    };
    return obj
}

const isLikeArrayObject = function (obj) {
    return obj && typeof obj === 'object' && typeof obj.length === 'number'
};
const obj1 = Object.create(null);
obj1.length = 10;
const obj2 = Object.create(obj1);
// console.log(Array.from(obj2));
// console.log(Array.from({length:10}));
module.exports = {customIterator, isLikeArrayObject};