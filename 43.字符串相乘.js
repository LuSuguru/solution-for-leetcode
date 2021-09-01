/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'

  let length2 = num2.length

  let result = '0'
  while (length2 > 0) {
    const n2 = +num2[length2 - 1]

    let part = '0'
    for (let i = 0; i < n2; i++) {
      part = add(part, num1)
    }

    if (part) {
      part += ''.padEnd(num2.length - length2, '0')
      result = add(result, part)
    }
    length2--
  }
  return result
}

function add(num1, num2) {
  let length1 = num1.length
  let length2 = num2.length
  let carry = 0

  let result = ''

  while (length1 > 0 || length2 > 0 || carry) {
    const n1 = num1[length1 - 1] || 0
    const n2 = num2[length2 - 1] || 0

    const plusVal = (+n1) + (+n2) + carry

    result = `${plusVal % 10}${result}`
    carry = Math.floor(plusVal / 10)
    length1--
    length2--
  }

  return result || '0'
}

function multiply(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'

  let m = num1.length
  let n = num2.length

  let arr = new Array(m + n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    let x = +num1[i]

    for (let j = n - 1; j >= 0; j--) {
      let y = +num2[j]
      arr[i + j + 1] += x * y
    }
  }

  for (let i = m + n - 1; i > 0; i--) {
    arr[i - 1] += Math.floor(arr[i] / 10)
    arr[i] %= 10
  }

  // 开头的 0 去掉
  if (arr[0] === 0) {
    arr.shift()
  }

  return arr.join('');
}
// @lc code=end
