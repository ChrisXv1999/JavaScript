function calculatePercentage(data) {
  const total = Object.values(data).reduce((acc, value) => acc + value, 0);
  let  totalPercentage = 0;
  const target = Object.entries(data).reduce((target, [key, value]) => {
    const percentage = Math.round((value * 10000) / total);
    totalPercentage += percentage;
    target[key] = {
        percentage,
        fractionalPart: (value * 10000) / total % 1
    };
    return target
  },{});
  return Object.entries(target).reduce((target,[key,{percentage}])=>{
    target[key] = (percentage/100).toFixed(2)+ '%';
    return target
  },{})
}
const data = {
  a: 12133,
  b: 32234,
  c: 121233,
  d: 42123,
  e: 32327,
  f:21123,
  g:1322,
  i:3122,
  y:21233
};
