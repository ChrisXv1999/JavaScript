/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;
    if (list1.val > list2.val) {
        list2.next = mergeTwoLists(list1,list2.next)
    } else {
        list1.next = mergeTwoLists(list1.next,list2)
    }
};





let count = 0;
var mergeTwoArrays = (list1,list2) => {
    if (list1.length === 0) return list2;
    if (list2.length === 0) return list1;
    let a = list1.shift();
    let b = list2.shift();
    if (a>b) {
        list1.unshift(a)
        return [b,...mergeTwoArrays(list1,list2)]
    }else {
        list2.unshift(b)
        return [a,...mergeTwoArrays(list1,list2)]
    }
}
console.log(mergeTwoArrays([1,2,3,4,12,45],[2,6,7,8,9,10]),count);
