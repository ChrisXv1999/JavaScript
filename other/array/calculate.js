const list = [1, 3, 5, 7.3, 9, 11];
/**
 * 累加
 * @param {number[]} list 
 * @returns {number}
 */
function accumulate(list) {
    return list.reduce((acc, cur) => acc + cur, 0)
}
/**
 * @param {number[]} list
 * @param {number} fractionDigits 
 * @returns {number}
 */
function average(list, fractionDigits = 2) {
    const avg = accumulate(list) / list.length
    return Number.isInteger(avg) ? avg : avg.toFixed(fractionDigits)
}

var numberOfWeeks = function(milestones) {
    const max = Math.max(...milestones);
    const acc = milestones.reduce((acc, cur) => acc + cur, 0);
    return acc - max >= max-1 ? acc : (acc-max) *2 + 1
};