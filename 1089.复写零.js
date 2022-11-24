/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */

// 我的憨批解法
// function duplicateZeros(arr) {
//   const { length } = arr

//   for (let i = 0; i < length; i++) {
//     if (arr[i] === 0) {
//       arr.splice(i + 1, 0, 0)
//       arr.pop()
//       i++
//     }
//   }
// }

// 双指针
function duplicateZeros(arr) {
  const { length } = arr

  // 获取到数组截取位置的坐标 i
  let i = 0
  let j = 0

  while (j < length) {
    if (arr[i] === 0) j++
    i++
    j++
  }

  // 这时候坐标i指向的是截取后一位，需要-1操作，j同理
  i--
  j--

  // 从尾到头进行双指针赋值 i : i->0   j : n->0
  while (i >= 0) {
    // j最后一步可能执行了+2操作,在此确保j的坐标小于n
    if (j < length) {
      arr[j] = arr[i]
    }

    // j的移动规则，在此确保j的坐标不小于0
    if (arr[i] === 0 && j >= 0) {
      j--
      arr[j] = 0
    }

    // i，j指针往前移动
    i--
    j--
  }
}
// @lc code=end
