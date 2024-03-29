/*
 * @lc app=leetcode.cn id=470 lang=javascript
 *
 * [470] 用 Rand7() 实现 Rand10()
 */

// @lc code=start
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
function rand10() {
  // (randX() - 1)*Y + randY() 可以生成 [0, X * Y]中的随机数
  while (true) {
    let num = (rand7() - 1) * 7 + rand7()
    // 如果在40以内，那就直接返回
    if (num <= 40) return 1 + num % 10

    // 说明刚才生成的在41-49之间，利用随机数再操作一遍
    num = (num - 40 - 1) * 7 + rand7()
    if (num <= 60) return 1 + num % 10

    // 说明刚才生成的在61-63之间，利用随机数再操作一遍
    num = (num - 60 - 1) * 7 + rand7()
    if (num <= 20) return 1 + num % 10
  }
}
// @lc code=end
