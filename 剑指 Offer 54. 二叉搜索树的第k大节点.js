/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthLargest(root, k) {
  let result
  const dfs = (node) => {
    if (!node) {
      return
    }

    dfs(node.right)

    k--
    if (k === 0) {
      result = node.val
    }
    dfs(node.left)
  }

  dfs(root)

  return result
}
