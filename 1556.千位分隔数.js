/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
function thousandSeparator(n) {
  return (n + '').replace(/\B(?=(\d{3})+$)/g, '.')
}

function thousandSeparator(n) {
  n += ''

  let res = ''
  let sep = 0

  for (let i = n.length - 1; i >= 0; i--) {
    res = `${n[i]}${res}`
    sep++

    if (sep === 3 && i !== 0) {
      res = `.${res}`
      sep = 0
    }
  }

  return res
}
// @lc code=end
