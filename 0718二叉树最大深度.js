/**
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

 // 递归方法（DFS深度优先）
 // 时间复杂度：每个节点只访问一次，时间复杂度为O(N)
 // 空间复杂度：最差的情况，树完全不平衡，递归会被调用N次，空间复杂度为O(N)
 //           最好的情况，树完全平衡，空间复杂度O(log(N))
var maxDepth = function(root) {
    if(root === null) {
      return 0;
    } else {
      let left_dep = maxDepth(root.left);
      let right_dep = maxDepth(root.right);
      return Math.max(left_dep, right_dep) + 1;
    }
};


