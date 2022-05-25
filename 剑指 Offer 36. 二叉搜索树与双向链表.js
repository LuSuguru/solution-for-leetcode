/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function treeToDoublyList(root) {
  if (!root) {
    return null
  }
  let head = null
  let pre = null

  const dfs = (node) => {
    if (node === null) {
      return null
    }

    dfs(node.left)

    if (pre === null) {
      head = node
    } else {
      pre.right = node
    }
    node.left = pre

    pre = node

    dfs(node.right)
  }

  dfs(root)

  pre.right = head
  head.left = pre

  return head
}
