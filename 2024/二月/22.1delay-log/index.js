let i = 0;
function delayLog(){
    i++;
    if(i > 7) {
        Promise.resolve(i).then(n=>{
            console.log(n);
        })
        return
    }
    console.log(i);
    delayLog();
}
delayLog()
setTimeout(()=>{
    console.log(i);
})

