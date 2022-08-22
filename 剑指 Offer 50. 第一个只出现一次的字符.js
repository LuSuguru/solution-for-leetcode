/**
 * @param {string} s
 * @return {character}
 */

function firstUniqChar(s) {
  const char = new Array()

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()

    char[index] = (char[index] || 0) + 1
  }

  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - 'a'.charCodeAt()
    if (char[index] === 1) {
      return s[i]
    }
  }

  return ''
}
