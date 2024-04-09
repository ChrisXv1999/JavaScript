const fetData = ()=> {
    return new Promise(resolve=> {
        setTimeout(()=>resolve('ok'),Math.random()*10*1000)
    })
} 
const fn = async ()=> {
    [1,2,3,4,5,6,7,8,9].forEach(()=>{
        const data = await fetData();
        console.log(data);
    })
}