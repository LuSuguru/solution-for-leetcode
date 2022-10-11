/*
 * @lc app=leetcode.cn id=726 lang=javascript
 *
 * [726] 原子的数量
 */

// @lc code=start
/**
 * @param {string} formula
 * @return {string}
 */

// 输入：formula = "K4(ON(SO3)2)2"
// 输出："K4N2O14S4"
function countOfAtoms(formula) {
  let i = 0

  const stack = [new Map()]
  const { length } = formula

  while (i < formula.length) {
    const parseAtom = () => {
      const sb = []
      // 大写字母
      let atom = formula[i++]

      // 小写字母
      while (i < length && formula[i] >= 'a' && formula[i] <= 'z') {
        atom += formula[i++]
      }
      return atom
    }

    const parseNum = () => {
      // 不是数字
      if (i === length || isNaN(Number(formula[i]))) {
        return 1
      }

      let num = 0
      while (i < length && !isNaN(Number(formula[i]))) {
        num = num * 10 + Number(formula[i++])
      }
      return num
    }

    if (formula[i] === '(') {
      i++
      stack.unshift(new Map()) // 将一个空的哈希表压入栈中，准备统计括号内的原子数量
    } else if (formula[i] === ')') {
      i++

      const num = parseNum() // 括号右侧数字
      const popMap = stack.shift() // 弹出括号内的原子数量
      const topMap = stack[0]
      for (const [atom, v] of popMap.entries()) {
        topMap.set(atom, (topMap.get(atom) || 0) + v * num) // 将括号内的原子数量乘上 num，加到上一层的原子数量中
      }
    } else {
      const atom = parseAtom()
      const num = parseNum()
      const topMap = stack[0]

      topMap.set(atom, (topMap.get(atom) || 0) + num) // 统计原子数量
    }
  }

  const map = Array.from(stack.pop()).sort()

  const sb = []
  for (const [atom, count] of map) {
    sb.push(atom)
    if (count > 1) {
      sb.push(count)
    }
  }
  return sb.join('')
}
// @lc code=end
