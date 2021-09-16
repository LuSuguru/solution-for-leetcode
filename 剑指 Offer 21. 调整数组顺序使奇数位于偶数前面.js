/**
 * @param {number[]} nums
 * @return {number[]}
 */
function exchange(nums) {
  const newNums = []

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      newNums.push(nums[i])
    } else {
      newNums.unshift(nums[i])
    }
  }
  return newNums
}

function exchange(nums) {
  let i = 0
  let j = nums.length - 1

  while (i < j) {
    while (nums[i] % 2 === 1) {
      i++
    }

    while (nums[j] % 2 === 0) {
      j--
    }

    if (i < j) {
      const mid = nums[i]
      nums[i++] = nums[j]
      nums[j--] = mid
    }
  }

  return nums
}
