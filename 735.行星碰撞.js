/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
function asteroidCollision(asteroids) {
  const stack = []

  const collision = (current) => {
    if (stack[stack.length - 1] > 0 && current < 0) {
      const last = stack.pop()
      const absLast = Math.abs(last)
      const absCurrent = Math.abs(current)

      if (absLast > absCurrent) {
        stack.push(last)
      } else if (absLast < absCurrent) {
        collision(current)
      }
    } else {
      stack.push(current)
    }
  }

  for (let i = 0; i < asteroids.length; i++) {
    const current = asteroids[i]
    if (stack.length === 0) {
      stack.push(current)
    } else {
      collision(current)
    }
  }

  return stack
}
// @lc code=end
