/**
 * @param {sting} word1 
 * @param {string} word2 
 * @returns boolean
 */ 
var closeStringsFake = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  if (word1 === word2) {
    return true;
  }
  let cMap = {};
  for (let i = 0; i < word1.length ;i++) {
    if (word1[i] === word2[i]) continue;
    cMap[word1[i]] ? cMap[word1[i]]++ : (cMap[word1[i]] = 1);
    cMap[word2[i]] ? cMap[word2[i]]-- : (cMap[word2[i]] = -1);
  }
  return Object.values(cMap).every((v) => v === 0);
};   
/**
 *  
 * 通过移动 反转两个字符 可以一致就算
 */   