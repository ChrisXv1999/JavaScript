const d2Array = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 31, 32, 33, 34, 35, 36]
]
function find(matrix, target, isArrayItem) {
    if (isArrayItem) {

    }
    let low = 0, high = matrix.length - 1;
    while (low < high) {
        const middle = (low + high + 1) >> 1;
        if (isArrayItem) {
            if (matrix[middle][0] <= target) {
                low = middle;
            } else {
                high = middle - 1;
            }
        } else {
            if (matrix[middle] <= target) {
                low = middle;
            } else {
                high = middle - 1;
            }
        }

    }
    return isArrayItem ? find(matrix[low], target, false) : low
}

console.log(find(d2Array, 19, true));

var func = (function (a) {
    this.a = a;
    return function (a) {
        a += this.a;
        return a;
    }
})(function (a, b) {
    return a;
}(1, 2));