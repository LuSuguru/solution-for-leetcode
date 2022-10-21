/*
 * @lc app=leetcode.cn id=845 lang=javascript
 *
 * [845] 数组中的最长山脉
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
function longestMountain(arr) {
  if (arr.length < 3) return 0

  let result = 0
  let direction = 'down'
  let part = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] - arr[i] < 0) {
      if (direction === 'down') {
        result = Math.max(result, part)
        part = 2
        direction = 'up'
      } else {
        part++
      }
    } else if (arr[i - 1] - arr[i] > 0) {
      if (direction === 'up') {
        part++
        direction = 'down'
      } else if (part !== 0) {
        part++
      }
    } else {
      if (direction === 'down') {
        result = Math.max(result, part)
      }

      direction = 'down'
      part = 0
    }
  }
  if (direction === 'down') {
    result = Math.max(result, part)
  }
  return result
}

function longestMountain(arr) {
  const n = arr.length;
  if (n == 0) {
    return 0;
  }
  const left = new Array(n).fill(0);
  for (let i = 1; i < n; ++i) {
    left[i] = arr[i - 1] < arr[i] ? left[i - 1] + 1 : 0;
  }
  const right = new Array(n).fill(0)
  for (let i = n - 2; i >= 0; --i) {
    right[i] = arr[i + 1] < arr[i] ? right[i + 1] + 1 : 0;
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    if (left[i] > 0 && right[i] > 0) {
      ans = Math.max(ans, left[i] + right[i] + 1);
    }
  }
  return ans;
}

// @lc code=end
