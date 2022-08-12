/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0
  }

  const queue = [root]
  let result = 0
  while (queue.length) {
    let { length } = queue
    result++
    while (length--) {
      const node = queue.shift()

      if (node?.children?.length) {
        queue.push(...node.children)
      }
    }
  }

  return result
}
// @lc code=end
