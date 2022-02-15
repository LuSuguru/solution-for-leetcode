/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

function Trie() {
  this.arr = []
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (this.search(word)) {
    return
  }

  this.arr.push(word)
  this.arr.sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      const code1 = a[i].charCodeAt()
      const code2 = b[i].charCodeAt()

      if (code1 !== code2) {
        return code1 - code2
      }
    }
    return b.length - a.length
  })
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.arr.includes(word)
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let { arr } = this

  for (let i = 0; i < prefix.length; i++) {
    const newArr = []
    const char = prefix[i]

    for (let j = 0; j < arr.length; j++) {
      if (char === arr[j][i]) {
        newArr.push(arr[j])
      }
    }

    arr = newArr

    if (arr.length === 0) {
      return false
    }
  }

  return true
}

class Trie {
  constructor() {
    // 指向子节点的指针数组
    this.children = {}
  }

  insert(word) {
    let curr = this.children

    for (let i = 0; i < word.length; i++) {
      const char = word[i]

      if (!curr[char]) {
        curr[char] = {}
      }
      curr = curr[char]
    }
    curr.isEnd = true
  }

  searchPrefix(prefix) {
    let node = this.children

    for (let i = 0; i < prefix.length; i++) {
      if (!node[prefix[i]]) {
        return false
      }
      node = node[prefix[i]]
    }

    return node
  }

  search(word) {
    return this.searchPrefix(word)?.isEnd === true
  }

  startsWith(prefix) {
    return !!this.searchPrefix(prefix)
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
