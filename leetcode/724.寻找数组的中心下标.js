/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//多想 否则事倍功半
var pivotIndex = function(nums) {
   const {length} = nums;
   const middle = length >> 1; 
   let lCount = 0;
   let rCount = 0;
   for(let i = 0; i < middle; i++) {
    lCount += nums[i];
    rCount += nums[length - i - 1];
   }
   if(length % 2 === 0) {
        if(lCount + nums[middle] === rCount) return middle;
        if(rCount + nums[middle+1] === lCount) return middle -1;
        return lCount + nums[middle] + nums[middle+ 1] + rCount === 0 ? 0 : -1;
   }
   return lCount === rCount ? middle : lCount + rCount + nums[middle] === 0 ? 0 :-1;
};
console.log(pivotIndex([2,1,-1]));
// @lc code=end

