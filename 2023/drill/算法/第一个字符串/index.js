var strStr = function(haystack, needle) {
    let idx = -1;
    for(let i = 0; i < haystack.length; i++) {
        if (haystack.slice(i,needle.length + i) === needle) {
           idx = i;
           break;
        }
    }
    return idx;
};
console.log(strStr('12123123','123'));