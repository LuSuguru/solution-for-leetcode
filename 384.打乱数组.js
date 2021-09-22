/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
function Solution(nums) {
  this.array = [...nums]
  this.originNums = nums
}

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.originNums
}

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const { array } = this

  for (let i = 0; i < array.length; i++) {
    const index = Math.floor((array.length - i) * Math.random())

    const temp = array[index]
    array[index] = array[i]
    array[i] = temp
  }

  return array
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end
