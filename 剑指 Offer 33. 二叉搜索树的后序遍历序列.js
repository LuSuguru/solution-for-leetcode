/**
 * @param {number[]} postorder
 * @return {boolean}
 */

function verifyPostorder(postorder) {
  if (postorder.length <= 2) return true

  const verify = (left, right) => {
    if (left >= right) return true

    let i
    for (i = left; i < right; i++) {
      if (postorder[i] > postorder[right]) break
    }

    for (let j = i; j < right; j++) {
      if (postorder[j] < postorder[right]) return false
    }

    return verify(left, i - 1) && verify(i, right - 1)
  }

  return verify(0, postorder.length - 1)
}
