/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
  const m = image.length
  const n = image[0].length

  const queue = [[sr, sc]]

  if (image[sr][sc] === newColor) {
    return image
  }

  while (queue.length) {
    const [x, y] = queue.shift()

    if (x < 0 || x >= m || y < 0 || y >= n) {
      continue
    }

    if (image[x][y] !== image[sr][sc]) {
      continue
    }

    image[x][y] = newColor

    queue.push([x - 1, y])
    queue.push([x + 1, y])
    queue.push([x, y - 1])
    queue.push([x, y + 1])
  }

  return image
}
// @lc code=end
