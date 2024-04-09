// console.log((3.45).toString(2));
// const n1 = 1.9999999999999998;
// console.log(n1.toString(2).length); 54
// console.log(n1);
// console.log((2).toString(2));
const cList = ["啊", "吧", "从", "的"];
cList.sort((a, b) => a.localeCompare(b)); //根据拼音排序
const a = "2312312312312321313123121";
const b = "31231231231231231232312311231231231";
// console.log(Number.MAX_SAFE_INTEGER.toString(2).length); //53
// console.log(Number.MAX_SAFE_INTEGER === Math.pow(2,53)-1);//true
/**
 *
 * @param {string|string[]} a
 * @param {string|string[]} b
 * @returns {string}
 * @example addBigInt('9999','9999')=>'19998'
 */
function addBigInt(a, b) {
  const _format = (a = [], b = []) => {
    let list = [];
    if (typeof a === "string") {
      list.push(a);
    } else {
      list = list.concat(a);
    }
    if (typeof b === "string") {
      list.push(b);
    } else {
      list = list.concat(b);
    }

    return list.every((n) => typeof n === "string") && list;
  };
  const list = _format(a, b);
  if (!list) {
    return "";
  }

  return list.reduce((count, current) => {
    const splitCount = 14;
    const aLen = count.length;
    const bLen = current.length;
    const maxLen = Math.max(aLen, bLen);
    count = count.padStart(maxLen, "0");
    current = current.padStart(maxLen, "0");
    let carry = "";
    let itemCount = "";
    for (let s = maxLen; s > 0; s -= splitCount) {
      itemCount =
        +count.substring(s - splitCount, s) +
        +current.substring(s - splitCount, s) +
        +carry +
        itemCount;
      carry = itemCount.length > maxLen - s + splitCount ? 1 : "";
      itemCount = itemCount.slice(-maxLen + s - splitCount);
    }
    return carry + itemCount;
  });
}
console.log(addBigInt(["99999999999999999", "99999999999999999"],["99999999999999999","99999999999999999"]));
console.log((BigInt('99999999999999999') + BigInt('99999999999999999') + BigInt('99999999999999999') + BigInt('99999999999999999')));
