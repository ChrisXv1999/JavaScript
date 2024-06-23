function formatTime(timeStamp){
    const now = new Date(+timeStamp);
    const year = now.getFullYear();
    const month = now.getMonth();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return `${year}年${month}月${day}日 ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
     
}
export {
    formatTime
}