const arr =[4,6,5,1];

// flag 4 start 1 end 3  4156 start 2 3  end 2 => 1 0  4516
/**
 * 
 * @param {Array} arr Unordered 
 * @returns {Array} order
 */
function quickSort(arr, start, end) {
    if (start < end) {
        const index = _quick(arr, start, end);
        quickSort(arr, start, index-1);
        quickSort(arr, index , end)
    }
    function _quick(arr, start, end) {
        let index = start;
        let flag = arr[index];
        start++;
        debugger
        while (start <= end) {
            while (arr[start] < flag) {
                start++;
            }
            while (arr[end] > flag) {
                end--;
            }
            if(start < end){
                [arr[start], arr[end]] = [arr[end], arr[start]] 
                start++;
                end --;
            }
        }
        [arr[index], arr[start-1]] = [arr[start-1], arr[index]]
        console.log(JSON.stringify(arr,start));

        return start
    }
    return arr
}

console.log(quickSort(arr, 0, arr.length-1));