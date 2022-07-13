/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (root === null) {
    return null
  }

  let start = root

  while (start !== null) {
    let last = null
    let nextStart = null

    for (let p = start; p !== null; p = p.next) {
      if (p.left) {
        if (last) {
          last.next = p.left
        }

        if (!nextStart) {
          nextStart = p.left
        }
        last = p.left
      }

      if (p.right) {
        if (last) {
          last.next = p.right
        }

        if (!nextStart) {
          nextStart = p.right
        }
        last = p.right
      }
    }

    start = nextStart
  }

  return root
}
// @lc code=end
