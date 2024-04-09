// 基本语法
let reg = /(test)/;
let str = 'testtestString';
// test 字符串是否满足正则表达式
// exec 匹配到会返回对象  0 匹配值 index 匹配值开始下标 input 原始值 未匹配到会返回null
console.log(reg.exec(str)); //[ 'test', index: 0, input: 'testString' ]
/**
 * {n,m} 匹配n次到m次 
 * * <=> {0,}零次或多次
 * + <=> {1,}
 * ? <=> {0,}
 * 贪心匹配 默认
 * {} ？非贪心匹配 
 * ^ 开头
 * $ 结尾
 * . 匹配除换行符外的所有字符
 * | 或
 * []合集满足里面任意一个
 * [^] 非合集内字符
 * \b 单词边界
 * \B 非单词边界
 * \d 数字
 * \D 非数字
 * \s 空白
 * \S 非空白
 * \w 单词 a-Z0-9
 * \W [^a-Z0-9]
 * ()匹配子项
 * 反向引用 /(\w)(\w)\1\2/  <=> /(\w)(\w)匹配子项1 匹配子项2/   
 * ?: 不记录子正则表达式的匹配结果
 * 正向预查 形式：(?=pattern) 要匹配的字符串，后面必须紧跟着pattern
 */
let backReferenceReg = /(?:\w)(\w)\1/
console.log(backReferenceReg.test('woow'));//第三第四个要和第一个一致 反向引用的数字不能大于待匹配子项的个数 可以用{m,n}增加