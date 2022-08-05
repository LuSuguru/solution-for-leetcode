/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function getMaxMatrix(matrix) {
  const m = matrix.length
  const n = matrix[0].length

  let max = matrix[0][0]
  const res = new Array(4)

  // 计算列的前缀和
  const prefixArr = new Array(m + 1).fill(0).map(() => new Array(n).fill(0))

  for (let i = 1; i < m + 1; i++) {
    for (let j = 0; j < n; j++) {
      prefixArr[i][j] = prefixArr[i - 1][j] + matrix[i - 1][j]
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = i + 1; j < m; j++) {
      let sum = prefixArr[j][0] - prefixArr[i][0]
      let start = 0

      for (let k = 1; k < n; k++) {
        // 计算 i~j的列总和
        const num = prefixArr[j][k] - prefixArr[i][k]

        if (sum > 0) {
          sum += num
        } else {
          sum = num
          start = k
        }

        if (sum > max) {
          max = sum

          res[0] = i
          res[1] = start
          res[2] = j
          res[3] = k
        }
      }
    }
  }

  return res
}
