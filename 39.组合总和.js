/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
  candidates.sort((a, b) => a - b)

  const result = []
  function backtracking(sum = 0, i = 0, track = []) {
    for (i; i < candidates.length; i++) {
      if (sum + candidates[i] >= target) {
        if (sum + candidates[i] === target) {
          result.push([...track, candidates[i]])
        }
        return
      }

      backtracking(sum + candidates[i], i, [...track, candidates[i]])
    }
  }

  backtracking()
  return result
}
// @lc code=end
