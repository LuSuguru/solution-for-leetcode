/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  const map = {}
  const result = []

  const getArr = (nums, tmp = '', tmpArr = []) => {
    for (let i = 0; i < nums.length; i++) {
      const temp = tmp + nums[i]
      const tempArr = [...tmpArr, nums[i]]

      if (nums.length === 1) {
        if (!map[temp]) {
          result.push(tempArr)
          map[temp] = 1
        }
      } else {
        const arr = [...nums]
        arr.splice(i, 1)
        getArr(arr, temp, tempArr)
      }
    }
  }

  getArr(nums)
  return result
}

function permuteUnique(nums) {
  const result = []
  const visited = new Array(nums.length).fill(false)

  const dfs = (idx = 0, perm = []) => {
    if (idx === nums.length) {
      result.push([...perm])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (visited[i] || (i > 0 && nums[i - 1] === nums[i] && !visited[i - 1])) {
        continue
      }

      perm.push(nums[i])
      visited[i] = true

      dfs(idx + 1, perm)

      visited[i] = false
      perm.pop()
    }
  }

  nums.sort((a, b) => a - b)
  dfs(0, [])
  return result
}

// @lc code=end
