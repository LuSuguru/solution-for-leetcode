/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
function hanota(A, B, C) {
  const { length } = A
  const tower = (n, a, b, c) => {
    if (n === 1) {
      const num = a.pop()
      c.push(num)
    } else {
      tower(n - 1, a, c, b)

      const num = a.pop()
      c.push(num)

      tower(n - 1, b, a, c)
    }
  }

  tower(length, A, B, C)
}
