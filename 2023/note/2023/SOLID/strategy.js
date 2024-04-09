const validateStrategy= {
    /**
     * @param  {string} str
     * @param  {string} [field]
     * @return Boolean | error {message}
     * @message 参数不能为空
    */
    isRequired: (str, field) => {
        if (str === '' || str === undefined) {
            return {
                message: `${field || ''} 不能为空`
            }
        }
        return true
    },
    /**
    * @param  {string} str
    * @param  {number} limit
    * @param  {string} [field]
    * @return Boolean | error {message}
   */
    lengthLimit: (str, limit, field) => {
        if (str.lenght > limit) {
            return {
                message: `${field || ''} 长度不能大于${limit}`
            }
        }
        return true
    },
    /**
* @param  {string} str
* @param  {number} symbol
* @param  {string} [field]
* @return Boolean | error {message}
*/
    excludeSymbol: (str, symbol, field) => {
        if (str.includes(symbol)) {
            return {
                message: `${field || ''} 不能包含${symbol}`
            }
        }
        return true
    },
    /**
    * @param  {number} number
    * @param  {string} [field]
    * @return Boolean | error {message}
    */
    isNumber(number, field) {
        if (Number.isNaN(Number(number))) {
            return {
                message: `${field || ''} 不是一个数字`
            }
        }
        return true
    }
}
/**
 * @param {*} val 
 * @param {Array} rules valueof validateStrategy
 * @return boolean || error{message}
 */
function validate(val,rules){
    return false
}
validate()
// call apply bind this 硬绑定
/**
 * 调度器
 * 核心
 * 注册插件功能
 * 执行插件功能
 * 维护this指向
 * 
 * 适当抽象
 * 简介api
 * 性能优化
 */
class Validate{
    errors=[]
    rules=[]
    errorBreak = false
    use(){

    }
    validate(){

    }
}