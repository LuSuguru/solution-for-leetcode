/*
 * @lc app=leetcode.cn id=722 lang=javascript
 *
 * [722] 删除注释
 */

// @lc code=start
/**
 * @param {string[]} source
 * @return {string[]}
 */
function removeComments(source) {
  source = source.join('\n').split('')

  let indexLine = -1
  let indexBB = -1
  let i = 0
  let { length } = source

  for (i = 0; i < length - 1; i++) {
    if (source[i] === '/' && source[i + 1] === '/') {
      indexLine = i
      i += 2
      while (i < length && source[i] !== '\n') {
        i++
      }
      source.splice(indexLine, i - indexLine)
      length -= i - indexLine
      i = indexLine - 1
    } else if (source[i] === '/' && source[i + 1] === '*') {
      indexBB = i
      i += 2
      while (i < length - 1 && !(source[i] === '*' && source[i + 1] === '/')) {
        i++
      }
      source.splice(indexBB, i + 2 - indexBB)
      length -= i + 2 - indexBB
      i = indexBB - 1
    }
  }

  source = source.join('').split('\n').filter(item => item !== '')

  return source
}

function removeComments(source) {
  // 是否在块注释中
  let inBlock = false
  let newLine = ''

  const result = []

  source.forEach(line => {
    if (!inBlock) {
      newLine = ''
    }

    for (let i = 0; i < line.length; i++) {
      if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '*') {
        inBlock = true
        i++
      } else if (inBlock && i + 1 < line.length && line[i] === '*' && line[i + 1] === '/') {
        inBlock = false
        i++
      } else if (!inBlock && i + 1 < line.length && line[i] === '/' && line[i + 1] === '/') {
        break
      } else if (!inBlock) {
        newLine += line[i]
      }
    }

    if (!inBlock && newLine.length) {
      result.push(newLine)
    }
  })

  return result
}
// @lc code=end
