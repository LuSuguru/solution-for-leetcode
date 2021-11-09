/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
function Solution(n, blacklist) {
  this.length = n - blacklist.length
  // [0,n-s) 中在黑名单中的数字
  this.map = new Map()
  // [n-s,n) 中在黑名单的数字
  const arr = []

  for (let i = 0; i < blacklist.length; i++) {
    if (blacklist[i] < this.length) {
      this.map.set(blacklist[i])
    } else {
      arr[blacklist[i]] = 1
    }
  }

  // 将 [0,n-s)中的黑名单数字与[n-s,n)中白名单数字做对应
  const keys = [...this.map.keys()]
  let j = 0
  for (let i = this.length; i < n; i++) {
    if (!arr[i]) {
      this.map.set(keys[j], i)
      j++
    }
  }
}

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
  const { length, map } = this

  const randomNum = Math.floor(Math.random() * length)
  // 随机到黑名单数字， 通过映射取白名单的
  if (!map.has(randomNum)) {
    return randomNum
  }

  return map.get(randomNum)
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end
