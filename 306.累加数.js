/*
 * @lc app=leetcode.cn id=306 lang=javascript
 *
 * [306] 累加数
 */

// @lc code=start
/**
 * @param {string} num
 * @return {boolean}
 */
function isAdditiveNumber(num) {
  // 存储枚举的数
  const tmp = []

  const backtracking = (num) => {
    const { length } = tmp
    // 校验是否满足累加规则，不满足直接返回 false
    if (length >= 3 && tmp[length - 1] !== tmp[length - 2] + tmp[length - 3]) return false

    if (num.length === 0 && length >= 3) return true

    // 从字符串中遍历取数
    for (let i = 0; i < num.length; i++) {
      const cur = num.substring(0, i + 1)

      // 如果取的数是以 0 开头且大于 1 位，则直接退出遍历，该情况不满足规则
      if (cur[0] === '0' && cur.length !== 1) break

      tmp.push(+cur)
      if (backtracking(num.substring(i + 1))) return true
      tmp.pop()
    }
    return false
  }

  return backtracking(num)
}
// @lc code=end
