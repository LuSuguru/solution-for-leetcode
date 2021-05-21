/*
 * @Date: 2021-04-14 18:23:28
 * @Author: 芦杰
 * @Description: Do not edit
 * @LastEditors: 芦杰
 * @LastEditTime: 2021-04-14 18:51:02
 */
/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
const MinStack = function () {
  this.stack = []
  this.minStack = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  const min = this.minStack[0]
  console.log(val, min)
  if (min === undefined || val <= min) {
    this.minStack.unshift(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const min = this.minStack[0]
  const current = this.stack.pop()
  if (min === current) {
    this.minStack.shift()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const { stack } = this
  return stack[stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[0]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
