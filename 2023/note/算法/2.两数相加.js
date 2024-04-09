/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1)return l2;
    if(!l2)return l1;
    let carry = 0;
    let l1Current = l1;
    let l2Current= l2;
    while (true) {
        const add = l1Current.val + l2Current.val + carry;
        l1Current.val = add % 10 ;
        carry = add > 9 ? 1 : 0;
        if(carry && !l1Current.next){
            l1Current.next = {
                next: null,
                val: carry,
            }
            carry = 0;
        }
        if(carry && !l2Current.next){
            l2Current.next = {
                next: null,
                val: carry,
            }
            carry = 0;
        }
        if(!l1Current.next || !l2Current.next)break;
        l1Current = l1Current.next;
        l2Current = l2Current.next;
        
    }

    if(!l1Current.next && l2Current.next) {
        l1Current.next = l2Current.next;
    }
    return l1
};
// @lc code=end

