/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//     k = k % nums.length;//没有考虑k > nums.length的情况
//     nums.unshift(...nums.splice(-k));
//     return nums
// };

var rotate = function (nums, k) {
    k = k % nums.length;//没有考虑k > nums.length的情况
    nums.unshift(...nums.splice(-k));
    return nums
};

console.log(rotate([1,2,3,4,5,6,7],2));
console.log(rotate([1,2],2));;
// @lc code=end

