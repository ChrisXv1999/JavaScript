/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let balance = {5:0,10:0};
    for(let bill of bills) {
        if(bill === 5) {
            balance[5]++;
        }else if(bill === 10){
            balance[5]--;
            balance[10]++;
        }else if(bill === 20){
            if(balance[10]){
                balance[10]--;
                balance[5]--;
            }else {
                balance[5] -=3;
            }
        }
        if(balance[5] < 0 || balance[10]<0) {
            return false
        }
    }
   
    return true
};
// @lc code=end

