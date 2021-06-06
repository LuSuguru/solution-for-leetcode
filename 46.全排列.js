/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * [1,2,3] 可以分解成 1，[2,3]
 * [2,3] 可以分解为 2，[3]
 * [3]的 result 为[[3]]
 * 对 result 的每个数组都进行2的插入可以得到两个结果
 * 所以新的 result 为 [2,3]，[3,2]
 * 对 [2,3],[3,2] 进行 1 的插入
 * 每个数组有3个位置，已[2,3]为例，[插入位,2，插入位,3，插入位]
 */
function permute(nums) {
  if (nums.length === 1) {
    return [nums]
  }

  const cur = nums[0]
  const result = permute(nums.slice(1))
  const { length } = result

  for (let i = 0; i < length; i++) {
    const arr = result.shift()
    for (let j = 0; j < arr.length + 1; j++) {
      const copyArr = [...arr]
      copyArr.splice(j, 0, cur)
      result.push(copyArr)
    }
  }

  return result
}

function permute(nums) {
  const result = []
  function getArr(nums, tmp = []) {
    for (let i = 0; i < nums.length; i++) {
      const temp = [...tmp, num]

      if (nums.length == 1) {
        result.push(temp)
      } else {
        const arr = [...nums]
        arr.splice(i, 1)
        getArr(arr, temp)
      }
    }
  }

  getArr(nums)
  return result
}

// 回溯法
function permute(nums) {
  const { length } = nums
  const result = []

  const visited = new Array(length)
  const track = []
  function backtrack(nums) {
    if (track.length === length) {
      result.push([...track])
    }

    for (let i = 0; i < length; i++) {
      const cur = nums[i]
      if (visited[cur]) {
        continue
      }

      visited[cur] = true
      track.push(cur)

      backtrack(nums)

      visited[cur] = false
      track.pop()
    }
  }

  backtrack(nums)
  return result
}
// @lc code=end
