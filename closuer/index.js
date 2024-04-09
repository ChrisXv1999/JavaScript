const a = 1;
const b = 2;
let add;
function initAdd(a){
    add = (b)=>{
        return a + b
    }
    //此处a的修改会影响到add函数中的a
    a++;
}
initAdd(a);
console.log(add(b));//4