let set = new Set();
function createRandomNumber(range) {
  let  rangeNumber = range>=5 ? 12 : 35;
  return Math.ceil(Math.random()*rangeNumber)
}
while(set.size !== 7) {
  set.add(createRandomNumber(set.size));
  if(set.size === 5) {
    let temp = Array.from(set);
    set.clear();
    set = new Set(temp.sort((a,b)=>a-b))
  }
}
console.log(set)

