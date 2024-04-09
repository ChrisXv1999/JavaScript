/*
 * @lc app=leetcode.cn id=2697 lang=javascript
 *
 * [2697] 字典序最小回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome1 = function(s) {
    let sArr = s.split('');
    for(let i=0,j=sArr.length-1;i<j;i++,j--){
        if(sArr[i]>sArr[j]) {
            sArr[i] = sArr[j]
        }
        if(sArr[i]<sArr[j]){
            sArr[j] = sArr[i]
        }
    }
    return sArr.join('')
}
//差异较小时具有优势
var makeSmallestPalindrome2 = function(s) {
    for(let i=0,j=s.length-1;i<j;i++,j--){
        if(s[i]>s[j]) {
            let s1 = s.substring(0,i);
            let s2 = s.substring(i+1);
            s = s1 +s[j] +s2
        }
        if(s[i]<s[j]){
            let s1 = s.substring(0,j);
            let s2 = s.substring(j+1);
            s = s1 +s[i] +s2
        }
    }
    return s
}

console.time('数组拼接');
for(let i=0;i<10*10000;i++) {
    makeSmallestPalindrome1('aaaabaaac')
}
console.timeEnd('数组拼接');
console.time('字符串拼接');
for(let i=0;i<10*10000;i++) {
    makeSmallestPalindrome2('aaaabaaaac')
}
console.timeEnd('字符串拼接');
// @lc code=end

