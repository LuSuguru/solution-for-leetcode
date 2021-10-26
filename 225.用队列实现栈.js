/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
function MyStack() {
  this.inQueue = []
  this.outQueue = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.inQueue.push(x)
  while (this.outQueue.length) {
    this.inQueue.push(this.outQueue.shift())
  }

  const mid = this.inQueue
  this.inQueue = this.outQueue
  this.outQueue = mid
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.outQueue.shift()
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.outQueue[0]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.outQueue.length === 0 && this.inQueue.length === 0
}

function MyStack() {
  this.queue = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  let { length } = this.queue
  this.queue.push(x)

  while (length--) {
    this.queue.push(this.queue.shift())
  }
}

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.queue.shift()
}

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.queue[0]
}

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.queue.length === 0
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end
