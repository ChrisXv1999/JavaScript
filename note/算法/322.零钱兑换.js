/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let count = 0;
    coins.sort((a,b)=>a-b)
    for(let i = coins.length -1; i>=0;i--){
        console.log(coins[i],amount);
        count += Math.floor(amount/coins[i])
        amount%=coins[i];
    }
    return amount === 0 ? count : -1
};
console.log(coinChange([186,419,83,408]
    ,6249))
// @lc code=end

