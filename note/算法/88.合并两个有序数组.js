/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    for(let i=0,j=0;i<n;){
        if(nums1[j]>nums2[i]){
            nums1.splice(j,0,nums2[i])
            i++;
        }
        j++;
    }
};
// @lc code=end

