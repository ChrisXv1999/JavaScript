function maximumLength(s) {
    const charCountMap = Object.create(null);
    for(const c of s){
        charCountMap[c] = (charCountMap[c] || 0 ) + 1
    }
    Object.entries(charCountMap).forEach(([char,count])=>{
        
    })
}
maximumLength('aaaa')