/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function _findIndex(s,c,start,end){
        for(let i = start; i<end; i++) {
            if(s[i] === c) {
                return i;
            }
        }
        return -1;
    }
    let start = 0;
    let tS = 0;
    let tE = 0;
    for(let i =0; i<s.length; i++) {
        const idx = _findIndex(s,s[i],start,i);
        if(idx!==-1) {
            for(let j = idx; j < i; j++){
                
            }
        }
    }
};
// @lc code=end

