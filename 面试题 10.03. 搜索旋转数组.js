/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
function search(arr, target) {
  if (arr[0] == target) {
    return 0
  }

  const { length } = arr
  let left = 0
  let right = length - 1

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)

    // mid值==target,则继续往左搜寻，找到最小的索引，最小索引一定不为0
    if (arr[mid] == target) {
      while (mid > 0 && arr[mid - 1] == arr[mid]) mid--
      return mid
    }

    if (arr[mid] < arr[right]) {
      if (arr[mid] < target && target <= arr[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    } else if (arr[mid] > arr[right]) {
      if (arr[left] <= target && target < arr[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      right--
    }
  }
  return -1
}
