/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
/**
 * 最接近末尾
 * 且在最小值之后的
 *  
 */
var maximumSwap = function(num) {
    let numList = String(num).split('');
    let min = 10;
    let max = 0;
    let maxIdx = 0;
    let minIdex = 0;
    for(let i = 1; i<numList.length; i++) {
        if(numList[i] > max) {
            max = numList[i];
            maxIdx = i;
        }
        if(min > numList[i]) {
            min = numList[i];
            minIdex = i;
        }
    }
    if(numList[0] < max) {
        numList[maxIdx] = numList[0];
        numList[0] = max
    }else {
        numList[maxIdx] = min;
        numList[minIdex] = max;
    }
    return numList.join('');
};
console.log(maximumSwap(9718));
// @lc code=end

