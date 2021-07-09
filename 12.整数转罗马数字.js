/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
// function intToRoman(num) {
//   const charArr = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'M']

//   let i = 1
//   let result = ''

//   while (num) {
//     const n = num % 10
//     num = Math.floor(num / 10)

//     const unit = charArr[i - 1]
//     const middleUnit = charArr[i]
//     const largeUnit = charArr[i + 1]

//     let curr = ''

//     if (n < 4) {
//       for (let i = 0; i < n; i++) {
//         curr += unit
//       }
//     } else if (n === 4) {
//       curr = `${unit}${middleUnit}`
//     } else if (n > 4 && n < 9) {
//       curr = middleUnit
//       for (let i = 5; i < n; i++) {
//         curr += unit
//       }
//     } else if (n === 9) {
//       curr = `${unit}${largeUnit}`
//     }

//     result = `${curr}${result}`
//     i += 2
//   }
//   return result
// }

// 我是傻逼
function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const chars = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

  let result = ''
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i]
      result += chars[i]
    }
  }

  return result
}
// @lc code=end
