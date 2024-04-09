let a = '1';
let b = '10';
function addBinary(a,b){
  let aArr = a.split('');
  let bArr = b.split('');
  let cArr = [];
  while(aArr.length || bArr.length) {
    let aTmp = aArr.pop() || '0';
    let bTmp = bArr.pop() || '0';
    let cTmp = cArr.shift() || '0';
    console.log(+aTmp , +bTmp , +cTmp);
    if(+aTmp + +bTmp + +cTmp === 3){
        cArr.unshift('1','1');
    }else if(+aTmp + +bTmp + +cTmp === 2) {
        cArr.unshift('1','0');
    }else if(+aTmp + +bTmp + +cTmp === 1) {
        cArr.unshift('0','1')
    } else {
        cArr.unshift('0','0');
    }
  }
  if (cArr[0] === '0') {
    cArr.shift()
  }
  return cArr.join('');
}

console.log(addBinary(a,b));