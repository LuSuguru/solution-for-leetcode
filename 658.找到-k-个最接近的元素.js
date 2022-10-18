/*
 * @lc app=leetcode.cn id=658 lang=javascript
 *
 * [658] 找到 K 个最接近的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
function findClosestElements(arr, k, x) {
  const { length } = arr

  let left = 0
  let right = arr.length - 1
  while (left < right) {
    const mid = (left + right) >> 1
    if (arr[mid] >= x) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  let i = left - 1
  let j = left

  while (k-- > 0) {
    if (i < 0) {
      j++
    } else if (j >= arr.length) {
      i--
    } else if (x - arr[i] <= arr[j] - x) {
      i--
    } else {
      j++
    }
  }

  const ans = []
  for (let m = i + 1; m < j; m++) {
    ans.push(arr[m])
  }
  return ans
}
// @lc code=end
