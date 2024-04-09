var isValid = function(s) {
    let leftBracket = ['{','[','('];
    let bracketMap = {
        '}':'{',
        ']':'[',
        ')':'('
    }
    let stack = [];
    for (let b of s) {
        if (leftBracket.includes(b)) {
            stack.push(b)
        } else {
            let t = stack.pop();
            if (bracketMap[b] !== t) {
                stack.push(t);
                break;
            } 
        }
    }
    return  stack.length === 0
}
