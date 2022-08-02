/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
function isSubStructure(A, B) {
  if (!A || !B) return false

  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

function dfs(a, b) {
  if (!b) return true
  if (!a) return false

  return a.val === b.val && dfs(a.left, b.left) && dfs(a.right, b.right)
}
