/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 模拟做法
function lastRemaining(n, m) {
  const arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i)
  }

  let i = 0
  while (n > 1) {
    i = (i + m - 1) % n
    arr.splice(i, 1)
    n--
  }

  return arr[0]
}

// 数学取巧法
function lastRemaining(n, m) {
  let result = 0

  for (let i = 2; i <= n; i++) {
    result = (result + m) % i
  }

  return result
}
