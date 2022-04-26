/**
 * @param {number} num
 * @return {number}
 */
function translateNum(num) {
  const numStr = num + ''
  const dp = new Array(numStr.length + 1).fill(1)

  for (let i = 1; i < numStr.length; i++) {
    const cur = numStr[i]
    const pre = numStr[i - 1]

    if (pre == 1 || (pre == 2 && cur >= 0 && cur <= 5)) {
      dp[i + 1] = dp[i] + dp[i - 1]
    } else {
      dp[i + 1] = dp[i]
    }
  }

  return dp[dp.length - 1]
}
