/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
  candidates.sort((a, b) => a - b)

  const result = []

  const backtracking = (start = 0, sum = 0, tmp = []) => {
    for (let i = start; i < candidates.length; i++) {
      // 如果当前元素不是第一个元素且等于第一个元素，那么它一定是第一个元素的结果的真子集，由于不能有重复组合，直接跳过
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue
      }

      if (sum + candidates[i] >= target) {
        if (sum + candidates[i] === target) {
          result.push([...tmp, candidates[i]])
        }
        return
      }
      backtracking(i + 1, sum + candidates[i], [...tmp, candidates[i]])
    }
  }

  backtracking()
  return result
}
// @lc code=end
