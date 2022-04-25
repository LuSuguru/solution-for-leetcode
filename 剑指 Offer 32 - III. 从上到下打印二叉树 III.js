/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
  const queue = root ? [root] : []
  const result = []
  let direction = true

  while (queue.length) {
    let { length } = queue
    const part = []

    while (length--) {
      const node = queue.shift()
      direction ? part.push(node.val) : part.unshift(node.val)

      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }

    direction = !direction
    result.push(part)
  }

  return result
}
