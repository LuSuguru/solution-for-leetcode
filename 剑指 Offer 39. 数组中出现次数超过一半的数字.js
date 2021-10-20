/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  nums.sort((a, b) => a - b)

  return nums[Math.floor(nums.length / 2)]
}

function majorityElement(nums) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const number = (map.get(nums[i]) || 0) + 1
    if (number >= nums.length / 2) {
      return nums[i]
    }
    map.set(nums[i], number)
  }
}

function majorityElement(nums) {
  let result
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      result = nums[i]
      count++
    } else {
      result === nums[i] ? count++ : count--
    }
  }

  return result
}
