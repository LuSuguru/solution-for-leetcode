/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 没看Tag,感觉自己像个弱智
function merge(nums1, m, nums2, n) {
  nums1.splice(m, n)

  const findNum = (num, start, end) => {
    if (start === end) {
      if (num > nums1[start] || nums1[start] === undefined) {
        return start
      }
      return start - 1
    }

    const middle = Math.floor((end - start) / 2) + start

    if (num === nums1[middle]) {
      return middle
    }

    if (num > nums1[middle]) {
      return findNum(num, middle + 1, end)
    }

    return findNum(num, start, middle)
  }

  let start = 0
  let end = Math.max(m - 1, 0)

  for (let i = 0; i < n; i++) {
    const num2 = nums2[i]
    const index = findNum(num2, start, end)

    nums1.splice(index + 1, 0, num2)
    start = index + 1
    end++
  }

  return nums1
}

// 双指针从后往前
function merge(nums1, m, nums2, n) {
  let p = m-- + n-- - 1

  while (m >= 0 && n >= 0) {
    nums1[p--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
  }

  while (n >= 0) {
    nums1[p--] = nums2[n--]
  }
}
// @lc code=end
