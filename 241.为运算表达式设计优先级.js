/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
const caculate = (a, op, b) => {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
  }
}

/**
 * @param {string} expression
 * @return {number[]}
 */
// 分治
// function diffWaysToCompute(expression) {
//   const memo = new Map()

//   const diff = (input = expression) => {
//     if (memo.has(input)) return memo.get(input)

//     const list = []

//     for (let i = 0; i < input.length; i++) {
//       if (['+', '-', '*'].includes(input[i])) {
//         const left = diff(input.substring(0, i))
//         const right = diff(input.substring(i + 1))

//         left.forEach((leftItem) => {
//           right.forEach((rightItem) => {
//             caculate(leftItem, input[i], rightItem)
//           })
//         })
//       }
//     }

//     // 数字
//     if (list.length === 0) list.push(+input)
//     memo.set(input, list)
//     return list
//   }
//   return diff()
// }

// 动态规划
function diffWaysToCompute(expression) {
  const nums = []
  const ops = []

  let num = 0
  for (let i = 0; i < expression.length; i++) {
    if (['+', '-', '*'].includes(expression[i])) {
      nums.push(num)
      ops.push(expression[i])
      num = 0
      continue
    }
    num = num * 10 + (+expression[i])
  }
  nums.push(num)

  // dp[i][j] 表示 i~j 的计算结果
  const dp = new Array(nums.length).fill(0).map(() => new Array(nums.length).fill([]))
  for (let i = 0; i < nums.length; i++) {
    dp[i][i] = [nums[i]]
  }

  // 计算从 2 个数字到 N 个数字
  for (let n = 2; n <= nums.length; n++) {
    // 开始下标
    for (let i = 0; i < nums.length; i++) {
      // 结束下标
      const j = i + n - 1
      if (j >= nums.length) {
        break
      }

      const list = []
      // 分成 i ~ s 和 s+1 ~ j 两部分
      for (let s = i; s < j; s++) {
        const result1 = dp[i][s]
        const result2 = dp[s + 1][j]

        result1.forEach(left => {
          result2.forEach(right => {
            list.push(caculate(left, ops[s], right))
          })
        })
      }
      dp[i][j] = list
    }
  }

  return dp[0][nums.length - 1]
}
// @lc code=end
