/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 排列序列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
  // 候选数字集合
  const collect = []
  // 阶乘集合，塞一个0，后面位置调整方便
  const factorials = [0]
  let fact = 1
  for (let i = 1; i <= n; i++) {
    collect.push(i)
    fact *= i
    factorials.push(fact)
  }

  // 从 0 开始计数，
  k -= 1

  let result = ''
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(k / factorials[i])
    console.log(i, k, index, collect)

    result += collect[index || 0]
    collect.splice(index, 1)
    k -= index * factorials[i]
  }

  return result
}
// @lc code=end
