function formatTime(timeStamp){
    const formatList = [
        [(t)=>t<10 ,(t)=>'刚刚'],
        [(t)=>t<60,(t)=>`${t}秒前`],
        [(t)=>t<60*60,(t)=>`${Math.floor(t/60)}分钟前`],
        [(t)=>t<60*60*24,(t)=>`${Math.floor(t/60)}小时前`],
        [(t)=>t>60*60*24,(t)=>new Date(t*1000)],
    ]
    const [,label] = formatList.find(([condition])=>condition(timeStamp/1000));
    return label(timeStamp/1000)
}
console.log(formatTime(10));
