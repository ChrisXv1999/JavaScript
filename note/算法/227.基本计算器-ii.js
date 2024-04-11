/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
//想 远大于 写 
var calculate = function(s) {
    // const nStack = [];
    // const sStack = [];
    // const symbolList = ['+','-','*','/'];
    // let n = '';
    // for(c of s){
    //     if(symbolList.includes(c)){
    //        if(c === '*'){
    //             const pre = nStack.pop();
    //             nStack.push(pre * n)
    //        }else if(c === '/') {
    //             const pre = nStack.pop();
    //             nStack.push(Math.floor(pre / n))
    //        } else {
    //             nStack.push(n);
    //             sStack.push(c);
    //        }
    //        n = '';
    //     }else {
    //         n+=c;
    //     }
    // }
    // nStack.push(n);
    // let symbol = '';
    // let count = Number(nStack.shift());
    // while(symbol = sStack.shift()) {
    //     if(symbol === '+'){
    //         count += Number(nStack.shift());
    //     }else {
    //         count -= Number(nStack.shift());
    //     }
    // }
    // return count;
};

// @lc code=end

