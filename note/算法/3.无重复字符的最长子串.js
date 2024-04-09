/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // let target = 0;
    // let list = [];
    // for(let c of s) {
    //     const idx = list.findIndex(d=>d===c);
    //     list.push(c)
    //     if(idx>-1) {
    //         target = Math.max(target,list.length - 1);
    //         list = list.slice(idx + 1);
    //     }
    // }
    // target = Math.max(target,list.length);
    // return target
    let start = 0;
    let maxLen = 0;
    for(let i = 0; i< s.length; i++) {
        for(let j = start; j<i; j++){
            if(s[j] === s[i]){
                maxLen = Math.max(maxLen,i - start);
                start = j + 1;
                break;
            }
        }
    }
    return Math.max(maxLen,s.length - start)
};
// @lc code=end

