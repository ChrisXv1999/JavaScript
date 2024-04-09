let filterKeys = [1,3,5];
let list = [{name:'',id:1},{name:'',id:2},{name:'',id:3},{name:'',id:4},];
let target = list.filter(d=>!filterKeys.includes(d.id))
console.log(target);