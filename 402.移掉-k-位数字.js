/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
function removeKdigits(num, k) {
  if (num.length === k) return '0'

  while (k) {
    for (let i = 0; i < num.length - 1; i++) {
      const curr = +num[i] || 0
      const next = +num[i + 1] || 0

      if (curr > next) {
        num = i === 0 ? num.slice(1) : `${num.slice(0, i)}${num.slice(i + 1)}`
        break
      } else if (i + 1 === num.length - 1) {
        num = num.slice(0, i + 1)
      }
    }
    k--
  }

  while (num.length > 1) {
    if (num[0] === '0') {
      num = num.slice(1)
    } else {
      break
    }
  }

  return num
}

function removeKdigits(num, k) {
  if (num.length === k) return '0'

  const stack = []
  for (const s of num) {
    while (stack.length && stack[stack.length - 1] > s && k > 0) {
      stack.pop()
      k -= 1
    }
    stack.push(s)
  }

  for (; k > 0; k--) {
    stack.pop()
  }

  let result = ''
  let isLeadingZero = true

  for (const s of stack) {
    if (isLeadingZero && s === '0') {
      continue
    }
    isLeadingZero = false
    result += s
  }

  return result || '0'
}

// @lc code=end
