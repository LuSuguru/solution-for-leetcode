/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
function getLeastNumbers(arr, k) {
  arr.sort((a, b) => a - b)
  return arr.slice(0, k)
}
