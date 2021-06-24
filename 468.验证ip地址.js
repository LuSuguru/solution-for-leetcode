/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} IP
 * @return {string}
 */
function validIPAddress(IP) {
  if (!IP) return 'Neither'

  if (IP.includes('.')) {
    if (/^((25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/.test(IP)) {
      return 'IPv4'
    }
    return 'Neither'
  }

  if (/^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$/.test(IP)) {
    return 'IPv6'
  }
  return 'Neither'
}
// @lc code=end
