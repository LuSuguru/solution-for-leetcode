/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  // 插入特定元素到有序数组特定位置
  function insertNumToArr(num, nums1) {
    // 小于20，暴力求解
    if (nums1.length <= 20) {
      let insertIndex = 0
      for (let i = 0; i <= nums1.length; i++) {
        if (num > nums1[i]) {
          insertIndex = i + 1
        }
      }
      nums1.splice(insertIndex, 0, num)
      return nums1
    }

    // 大于20，二分搜索
    const nums1MidIndex = Math.ceil(nums1.length / 2)
    const nums1Mid = nums1[nums1MidIndex - 1]
    const nums1Left = nums1.slice(0, nums1MidIndex)
    const nums1Right = nums1.slice(nums1MidIndex)

    if (num <= nums1Mid) {
      return [...insertNumToArr(num, nums1Left), ...nums1Right]
    }

    if (num >= nums1Mid) {
      return [...nums1Left, ...insertNumToArr(num, nums1Right)]
    }
  }

  // 合并数组
  function mergeSortedArrays(nums1, nums2) {
    if (nums1.length === 0) {
      return nums2
    }

    if (nums2.length === 0) {
      return nums1
    }

    if (nums2.length === 1) {
      return insertNumToArr(nums2[0], nums1)
    }

    // 参考值
    const nums1Min = nums1[0]
    const nums1Max = nums1[nums1.length - 1]

    // 二分搜索
    const nums2MidIndex = Math.ceil(nums2.length / 2)
    const nums2Mid = nums2[nums2MidIndex - 1]
    const nums2Left = nums2.slice(0, nums2MidIndex)
    const nums2Right = nums2.slice(nums2MidIndex)

    // 递归分治
    if (nums1Max <= nums2Mid) {
      return [
        ...mergeSortedArrays(nums1, nums2Left),
        ...nums2Right
      ]
    }

    if (nums1Min >= nums2Mid) {
      return [
        ...nums2Left,
        ...mergeSortedArrays(nums1, nums2Right),
      ]
    }

    for (let i = nums2MidIndex; i < nums2.length; i++) {
      const current = nums2[i]

      if (nums1Max <= current) {
        return [
          ...mergeSortedArrays(nums1, nums2.slice(0, i)),
          ...nums2.slice(i)]
      }
    }

    // 说明 nums2包含nums1
    return mergeSortedArrays(nums2, nums1)
  }

  const mergeArr = mergeSortedArrays(nums1, nums2)
  const { length } = mergeArr
  const half = length / 2

  if (Math.floor(half) !== half) {
    return mergeArr[Math.floor(half)]
  }
  return (mergeArr[half - 1] + mergeArr[half]) / 2
}

// 找两个数组中第K个元素，O(log (m+n))
// 巧妙利用 n+m+1,n+m+2
const findMedianSortedArrays = function (nums1, nums2) {
  // i: nums1的起始位置 j: nums2的起始位置
  const findKth = (nums1, i, nums2, j, k) => {
    if (i >= nums1.length) return nums2[j + k - 1]// nums1为空数组
    if (j >= nums2.length) return nums1[i + k - 1]// nums2为空数组

    if (k == 1) {
      return Math.min(nums1[i], nums2[j])
    }

    const half = Math.floor(k / 2)

    const midVal1 = (i + half - 1 < nums1.length) ? nums1[i + half - 1] : Number.MAX_VALUE
    const midVal2 = (j + half - 1 < nums2.length) ? nums2[j + half - 1] : Number.MAX_VALUE

    if (midVal1 < midVal2) {
      return findKth(nums1, i + half, nums2, j, k - half)
    }
    return findKth(nums1, i, nums2, j + half, k - half)
  }

  const m = nums1.length
  const n = nums2.length
  const left = Math.floor((m + n + 1) / 2)
  const right = Math.floor((m + n + 2) / 2)
  return (findKth(nums1, 0, nums2, 0, left) + findKth(nums1, 0, nums2, 0, right)) / 2.0
}
// @lc code=end
