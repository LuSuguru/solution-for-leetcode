/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity
  this.num = 0
  this.head = { // 头结点
    previous: null,
    next: this.tail,
  }
  this.tail = { // 尾节点
    previous: this.head,
    next: null,
  }

  this.map = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key)
  if (!node) {
    return -1
  }

  this.moveToTail(node)
  return node.val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = this.map.get(key)
  // 如果存在，更新值
  if (node) {
    this.moveToTail(node)
    node.val = value
  } else {
    const newNode = {
      key,
      val: value,
      previous: null,
      next: null
    }
    this.map.set(key, newNode)
    this.add(newNode)
    this.num++

    // 如果超过限制，先删除最久未使用的
    if (this.num > this.capacity) {
      const node = this.removeFirst()
      this.map.delete(node.key)
      this.num--
    }
  }
}

// 插入到末尾
LRUCache.prototype.add = function (newNode) {
  newNode.previous = this.tail.previous
  newNode.next = this.tail
  this.tail.previous.next = newNode
  this.tail.previous = newNode
}

// 删除节点
LRUCache.prototype.remove = function (node) {
  node.previous.next = node.next
  node.next.previous = node.previous

  node.previous = null
  node.next = null

  return node
}

// 将节点移到尾部
LRUCache.prototype.moveToTail = function (node) {
  this.remove(node)
  this.add(node)
}

// 删除头部的节点
LRUCache.prototype.removeFirst = function () {
  const node = this.head.next
  this.remove(node)
  return node
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end
