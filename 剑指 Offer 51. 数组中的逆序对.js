/**
 * @param {number[]} nums
 * @return {number}
 */
// 输入: [7,5,6,4]
// 输出: 5

function reversePairs(nums) {
  let count = 0

  function merge(nums, left, mid, right) {
    let i = left
    let j = mid + 1
    let t = 0
    const tmp = new Array(right - left + 1)

    while (i <= mid && j <= right) {
      if (nums[i] <= nums[j]) {
        tmp[t++] = nums[i++]
      } else {
        count += mid - i + 1
        tmp[t++] = nums[j++]
      }
    }

    while (i <= mid) {
      tmp[t++] = nums[i++]
    }

    while (j <= right) {
      tmp[t++] = nums[j++]
    }

    for (let k = 0; k < tmp.length; k++) {
      nums[left + k] = tmp[k]
    }
  }

  function mergeSort(nums, left, right) {
    const mid = Math.floor((left + right) / 2)

    if (left >= right) {
      return
    }

    mergeSort(nums, left, mid)
    mergeSort(nums, mid + 1, right)

    merge(nums, left, mid, right)
  }

  mergeSort(nums, 0, nums.length - 1)
  return count
}
