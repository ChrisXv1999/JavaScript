const p1 = new Promise((resolve, reject) => {
    resolve('p1')
});

Promise.resolve().then(async ()=>{
    await new Promise();
    console.log('p2');
})
p1.then(res => {
    console.log(res);
})
