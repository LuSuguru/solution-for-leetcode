/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n === 0 || n === 1) return n
  let pre = 0
  let cur = 1

  for (let i = 2; i <= n; i++) {
    const result = pre + cur
    pre = cur
    cur = result % 1000000007
  }

  return cur
}
