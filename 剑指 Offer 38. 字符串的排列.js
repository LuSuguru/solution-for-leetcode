/**
 * @param {string} s
 * @return {string[]}
 */
function permutation(s) {
  const { length } = s
  const result = new Set()
  const visited = new Array(length)

  const backtrack = (track = '') => {
    if (track.length === length) {
      result.add(track)
      return
    }

    for (let i = 0; i < length; i++) {
      if (visited[i]) {
        continue
      }

      visited[i] = true
      backtrack(track + s[i])
      visited[i] = false

    }
  }

  backtrack()
  return [...result]
}

function permutation(s) {
  const { length } = s
  const result = new Set()
  const sArr = s.split('')

  const dfs = (sArr, tmp = '') => {
    for (let i = 0; i < sArr.length; i++) {
      const newTmp = tmp + sArr[i]

      if (sArr.length === 1) {
        result.add(newTmp)
      } else {
        const newSArr = [...sArr]
        newSArr.splice(i, 1)
        dfs(newSArr, newTmp)
      }
    }
  }

  dfs(sArr)
  return [...result]
}
