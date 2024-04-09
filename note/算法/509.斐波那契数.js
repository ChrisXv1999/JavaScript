/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n===0)return 0
    let n1 = 0;
    let n2 = 1;
    for(let i =2; i<n;i++) {
        let temp = n1;
        n1 = n2;
        n2 = temp + n2
    }
    return n1 + n2
};
// @lc code=end

