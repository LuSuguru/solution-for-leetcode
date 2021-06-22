/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// hash-table
function intersection(nums1, nums2) {
  const set1 = new Set()
  const set2 = new Set()

  for (let i = 0; i < nums1.length; i++) {
    set1.add(nums1[i])
  }

  for (let j = 0; j < nums2.length; j++) {
    if (set1.has(nums2[j])) {
      set2.add(nums2[j])
    }
  }

  return [...set2]
}

function intersection(nums1, nums2) {
  nums1.sort((a, b) => a - b)
  nums2.sort((a, b) => a - b)

  let index1 = 0
  let index2 = 0

  const result = []
  while (index1 < nums1.length && index2 < nums2.length) {
    const i = nums1[index1]
    const j = nums2[index2]

    if (i === j && i !== result[result.length - 1]) {
      result.push(i)
      index1++
      index2++
    } else if (i < j) {
      index1++
    } else {
      index2++
    }
  }
  return result
}
// @lc code=end
