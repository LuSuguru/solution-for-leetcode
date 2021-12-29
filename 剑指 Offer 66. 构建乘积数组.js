/**
 * @param {number[]} a
 * @return {number[]}
 */
function constructArr(a) {
  const arr1 = [a[0]]
  const arr2 = [a[a.length - 1]]

  for (let i = 1; i < a.length; i++) {
    arr1.push(arr1[i - 1] * a[i])
  }

  for (let i = a.length - 2; i > -1; i--) {
    arr2.unshift(arr2[0] * a[i])
  }

  const result = []

  for (let i = 0; i < a.length; i++) {
    result.push((arr1[i - 1] !== undefined ? arr1[i - 1] : 1) * (arr2[i + 1] !== undefined ? arr2[i + 1] : 1))
  }

  return result
}

function constructArr(a) {
  const result = []

  for (let i = 0, cur = 1; i < a.length; i++) {
    result[i] = cur
    cur *= a[i]
  }

  for (let j = a.length - 1, cur = 1; j > -1; j--) {
    result[j] *= cur
    cur *= a[j]
  }

  return result
}