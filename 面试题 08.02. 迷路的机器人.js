/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
function pathWithObstacles(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length

  const result = []

  const backtracking = (i = 0, j = 0) => {
    if (obstacleGrid[i][j] === 1) {
      return false
    }

    result.push([i, j])

    if (i === m - 1 && j === n - 1) {
      return true
    }

    if (i < m - 1 && backtracking(i + 1, j)) {
      return true
    }

    if (j < n - 1 && backtracking(i, j + 1)) {
      return true
    }

    result.pop()
    obstacleGrid[i][j] = 1

    return false
  }

  backtracking()

  return result
}
