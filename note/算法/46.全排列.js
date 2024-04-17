/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 1) return [nums]
    return nums.reduce((target,curent,index)=>{
        const temp = [...nums];
        temp.splice(index,1);
        permute(temp).forEach(item=>{
            item.unshift(curent);
            target.push(item);
        });
        return target
    },[]);
};
// @lc code=end

