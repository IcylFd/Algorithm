//  请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
/**
    链表至少包含两个节点。
    链表中所有节点的值都是唯一的。
    给定的节点为非末尾节点并且一定是链表中的一个有效节点。
    不要从你的函数中返回任何结果。
**/

/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
**/


var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

//  思路：无法访问我们想要删除的节点之前的节点，所以不能将之前节点的next指向删除节点的next，
//       所以把删除节点的next的值赋给删除节点，然后删除next节点