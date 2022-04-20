/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function movingCount(m, n, k) {
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let result = 0

  const dfs = (i = 0, j = 0) => {
    if (i < 0 || i === m || j < 0 || j === n || dp[i][j] === 1) {
      return
    }
    if ((Math.floor(i / 10) + i % 10 + Math.floor(j / 10) + j % 10) > k) {
      dp[i][j] = 1
      return
    }
    dp[i][j] = 1
    result++

    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  dfs()
  return result
}
