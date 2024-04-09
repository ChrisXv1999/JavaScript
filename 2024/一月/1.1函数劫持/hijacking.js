function say(name){
    console.log(name);
}
const proxySay = new Proxy(say,{
    apply(target,thisArg,argArray){
       return target(thisArg,...argArray)
    }
}) 
const util = {
    say:proxySay
}
util.say(123)