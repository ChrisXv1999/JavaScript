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
    const numberStack = [];
    const symbolStack = [];
    const symbolList = ['+','-','*','/'];
    const highPriority = ['*','/'];
    const symbolHandlerMap = {
        '+':_add,
        '-':_subtract,
        '*':_multiply,
        '/':_divide,
    }
    let n = '';
    //1*1+1*2 + 1
    for (char of s) {
        if(symbolList.includes(char)){
            n = +n;
            const symbol = symbolStack.pop();
            if(symbol && highPriority.includes(symbol)) { 
                const number = numberStack.pop(); 
                n = symbolHandlerMap[symbol](number,n);
            }else {
                symbol && symbolStack.push(symbol);
            }
            numberStack.push(n);
            if(numberStack.length === 2 && !highPriority.includes(char)) {
                const a = numberStack.pop();
                const b = numberStack.pop();
                numberStack.push(symbolHandlerMap[symbolStack.pop()](b,a))
            }
            symbolStack.push(char);
            n = '';
        }else {
            n+=char;
        }
    }
    function _add(a,b){
        return a+b
    }
    function _subtract(a,b){
        return a-b
    }
    function _multiply(a,b){
        return a*b
    }
    function _divide(a,b){
        return Math.floor(a/b)
    }
    
    return symbolStack.reduceRight((t,symbol)=>{
        return symbolHandlerMap[symbol](numberStack.pop(),t)
    },+n);
};
console.log(calculate('1*2-3/4+5*6-7*8+9/10'));

// @lc code=end

