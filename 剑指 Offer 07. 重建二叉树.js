/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  if (preorder.length === 0) return null

  const val = preorder[0]
  const index = inorder.indexOf(val)

  const leftPreorder = preorder.slice(1, index + 1)
  const rightPreorder = preorder.slice(index + 1)

  const leftInorder = inorder.slice(0, index)
  const rightInorder = inorder.slice(index + 1)

  return {
    val,
    left: buildTree(leftPreorder, leftInorder),
    right: buildTree(rightPreorder, rightInorder)
  }
}
