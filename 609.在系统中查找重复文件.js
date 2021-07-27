/*
 * @lc app=leetcode.cn id=609 lang=javascript
 *
 * [609] 在系统中查找重复文件
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
function findDuplicate(paths) {
  const map = new Map()

  for (let i = 0; i < paths.length; i++) {
    const [path, ...files] = paths[i].split(' ')

    for (let j = 0; j < files.length; j++) {
      const leftIndex = files[j].indexOf('(')
      const rightIndex = files[j].indexOf(')')

      const fileName = files[j].substring(0, leftIndex)
      const fileContent = files[j].substring(leftIndex + 1, rightIndex)

      const value = map.get(fileContent)
      if (value) {
        value.push(`${path}/${fileName}`)
      } else {
        map.set(fileContent, [`${path}/${fileName}`])
      }
    }
  }

  const result = []
  for (const value of map.values()) {
    if (value.length > 1) result.push(value)
  }
  return result
}
// @lc code=end
