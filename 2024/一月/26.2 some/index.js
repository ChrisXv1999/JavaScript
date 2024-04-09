const list = [{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'a' }]
const nameMap = {};
const hasRepeat = list.some(({ name }) => nameMap[name] === false || (nameMap[name] = false))
console.log(hasRepeat);