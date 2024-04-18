/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
    changed.sort((a, b) => a - b);
    const target = [];
    const map = Object.create(null);
    for (const num of changed) {
        map[num] = (map[num] || 0) + 1;
    }
    for (const a of changed) {
        if (map[a] === 0) {
            continue;
        }
        map[a]--;
        if (!map[a * 2]) {
            return [];
        }
        map[a * 2]--;
        target.push(a);
    }
    return target;
};