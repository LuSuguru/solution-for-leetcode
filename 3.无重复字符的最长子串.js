/*
 * @Date: 2021-03-02 09:22:13
 * @Author: 芦杰
 * @Description: Do not edit
 * @LastEditors: 芦杰
 * @LastEditTime: 2021-04-23 10:39:52
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = {} // 存放子串每个字符的位置

  // two-pointers 和 sliding-window
  let start = -1 // 开始位置
  let maxLength = 0

  for (let i = 0; i < s.length; i++) {
    const arrCurrent = s[i]

    if (arrCurrent in map) {
      start = Math.max(map[arrCurrent], start)
    }

    map[arrCurrent] = i
    maxLength = Math.max(i - start, maxLength)
  }

  return maxLength
};
// @lc code=end


