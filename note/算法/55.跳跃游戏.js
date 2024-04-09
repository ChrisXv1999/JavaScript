/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let len = nums.length;
    let cover = 0;
    for(let i=0;i<=cover;i++){
        cover = Math.max(cover,nums[i]+i);
        if(cover >= len -1) return true
    }
    return false
};
// @lc code=end

