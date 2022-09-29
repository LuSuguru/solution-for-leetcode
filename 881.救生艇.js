/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b)

  let result = 0

  let i = 0
  while (people.length > 0) {
    const last = people.pop()
    const canPut = limit - last

    result++

    if (canPut === 0 || people.length === 0) {
      continue
    }

    for (i; i <= people.length; i++) {
      if (people[i] > canPut) break
    }

    for (i; i >= 0; i--) {
      if (people[i] <= canPut) break
    }

    if (i === -1) {
      continue
    }

    people.splice(i, 1)
  }

  return result
}

function numRescueBoats(people, limit) {
  people.sort((a, b) => a - b)
  
  let result = 0

  let right = people.length - 1
  let left = 0

  while (left <= right) {
    if (left === right) {
      result++
      break
    } else if (people[left] + people[right] > limit) {
      result++

      right--
    } else {
      result++

      right--
      left++
    }
  }
  return result
}
// @lc code=end
