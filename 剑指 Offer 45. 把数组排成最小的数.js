/**
 * @param {number[]} nums
 * @return {string}
 */
function minNumber(nums) {
  nums.sort((a, b) => {
    a += ''
    b += ''

    return (a + b) - (b + a)
  })

  return nums.join('')
}
