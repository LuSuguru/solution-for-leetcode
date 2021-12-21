/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersect(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let i1 = 0
  let i2 = 0

  const result = []
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] === nums2[i2]) {
      result.push(nums1[i1])
      i1++
      i2++
    } else if (nums1[i1] < nums2[i2]) {
      i1++
    } else {
      i2++
    }
  }

  return result
}

function intersect(nums1, nums2) {
  const map = {}

  for (let i = 0; i < nums1.length; i++) {
    if (map[nums1[i]]) {
      map[nums1[i]]++
    } else {
      map[nums1[i]] = 1
    }
  }

  const result = []
  for (let i = 0; i < nums2.length; i++) {
    if (map[nums2[i]] > 0) {
      result.push(nums2[i])
      map[nums2[i]]--
    }
  }

  return result
}
// @lc code=end
