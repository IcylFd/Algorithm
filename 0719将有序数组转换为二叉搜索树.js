// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
// 一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  if(nums === null || nums.length === 0) {
    return null;
  } 
  return getTree(nums, 0, nums.length - 1);
};

var getTree = function(nums, start, end) {
  if(start <= end) {
    let mid = (start + end) / 2;
    let node = new TreeNode(nums[mid]);
    node.left = getTree(nums, 1, mid - 1);
    node.right = getTree(nums, mid + 1, end);
    return node;
  } else {
    return null;
  }
}