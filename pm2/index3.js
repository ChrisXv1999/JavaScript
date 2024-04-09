function isPPDICount(start,end){
    let count = 0;
    for(let i = start;i<=end;i++) {
       const str = String(i);
       const total =  str.split('').reduce((total,cur)=>(total += Math.pow(cur,str.length)),0);
       count += total === i;
    }
    return count;
}
console.time();
console.log(isPPDICount(100,1000000));
console.timeEnd()