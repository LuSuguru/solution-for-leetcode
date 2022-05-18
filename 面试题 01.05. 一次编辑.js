/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function oneEditAway(first, second) {
  if (Math.abs(first.length - second.length) > 1) {
    return false
  }

  let i = 0
  let j = 0
  let edited = false

  while (i < first.length && j < second.length) {
    if (first[i] !== second[j]) {
      if (edited) {
        return false
      }
      edited = true
      // 编辑
      if (first.length === second.length) {
        i++
        j++
      } else if (first.length > second.length) { // 删除、添加
        i++
      } else {
        j++
      }
    } else {
      i++
      j++
    }
  }
  return true
}
