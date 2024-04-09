function isSub(s1, s2) {
    return new RegExp(`${s1.split('').join('.*')}`).test(s2)
}
console.log(isSub('abc', 'acbc'));