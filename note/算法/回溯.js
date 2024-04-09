const arr = [1,2,3];
let counter = 0;
function backtrack(arr){
    const list = [];
    function _backtrack(list,temp,arr){
        if(temp.length >= arr.length) {
            return list.push([...temp])
        }
        for(let i =0;i<arr.length; i++){
            counter++;
            if(temp.includes(arr[i]))continue;
            temp.push(arr[i]);
            _backtrack(list,temp,arr);
            temp.pop();
        }
    }
    _backtrack(list,[],arr);
    return list
}
console.log(backtrack(arr));
console.log(counter);