/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */
function numRabbits(answers) {
  const map = new Map()

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i]
    map.set(answer, (map.get(answer) || 0) + 1)
  }

  return [...map].reduce((pre, [key, value]) => {
    const maxNum = +key + 1

    const group = Math.ceil(value / maxNum)

    pre += group * maxNum
    return pre
  }, 0)
}
// @lc code=end
