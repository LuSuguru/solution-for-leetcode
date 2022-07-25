/**
 * @param {number} target
 * @return {number[][]}
 */

// 9
// [[2,3,4],[4,5]]
// 15
// [[1,2,3,4,5],[4,5,6],[7,8]]
function findContinuousSequence(target) {
  const result = []

  for (let l = 1, r = 2; l < r;) {
    const sum = (l + r) * (r - l + 1) / 2

    if (sum === target) {
      const arr = []
      for (let i = l; i <= r; i++) {
        arr.push(i)
      }
      result.push(arr)
      l++
    } else if (sum < target) {
      r++
    } else {
      l++
    }
  }

  return result
}
