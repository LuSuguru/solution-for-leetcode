/*
 * @lc app=leetcode.cn id=528 lang=javascript
 *
 * [528] 按权重随机选择
 */

// @lc code=start
/**
 * @param {number[]} w
 */
function Solution(w) {
  // 前缀和
  this.pre = new Array(w.length)
  this.length = w.length

  w.reduce((pre, cur, index) => {
    this.pre[index] = pre + cur
    return this.pre[index]
  }, 0)
}

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  const { pre, length } = this

  const x = Math.floor(Math.random() * pre[length - 1]) + 1

  let left = 0
  let right = length - 1

  while (left < right) {
    const mid = (left + right) >> 1

    if (pre[mid] < x) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  return left
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
// @lc code=end
