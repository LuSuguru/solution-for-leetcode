/*
 * @lc app=leetcode.cn id=420 lang=javascript
 *
 * [420] 强密码检验器
 */

// @lc code=start
/**
 * @param {string} password
 * @return {number}
 */
function strongPasswordChecker(password) {
  const { length } = password
  let kind = 0
  let number = false
  let upper = false
  let lower = false

  const continuousList = []

  for (let i = 0; i < length; i++) {
    const c = password[i]

    if (!upper && (c.charCodeAt() >= 'A'.charCodeAt()) && (c.charCodeAt() <= 'Z'.charCodeAt())) {
      upper = true
      kind++
    }

    if (!lower && (c.charCodeAt() >= 'a'.charCodeAt()) && (c.charCodeAt() <= 'z'.charCodeAt())) {
      lower = true
      kind++
    }

    if (!number && (c.charCodeAt() >= '0'.charCodeAt()) && (c.charCodeAt() <= '9'.charCodeAt())) {
      number = true
      kind++
    }

    let continuous = 1
    while (i + 1 < length && password[i + 1] === c) {
      i++
      continuous++
    }

    if (continuous >= 3) {
      continuousList.push(continuous)
    }
  }

  // 满足密码要求
  if (length >= 6 && length < 20 && kind === 3 && continuousList.length === 0) {
    return 0
  }

  // 需要增加的字符种类，可以通过insert或update
  const needChangeByKind = 3 - kind

  if (length >= 6 && length <= 20) {
    // 数量满足要求只需要update即可
    // needChangeByContinuous=continuous/3
    const needChangeByContinuous = continuousList.reduce((pre, continuous) => pre += Math.floor(continuous / 3), 0)
    return Math.max(needChangeByContinuous, needChangeByKind)
  }

  if (length < 6) {
    // 需要insert
    const needInsert = 6 - length
    // 1. 如果需要插入2个或2个以上，仅考虑插入的数量就可以满足密码要求
    // 2. 如果只需要插入1个，以下两种情况需要insert一次，update一次，其它情况均只需要操作1次：
    //      a. 连续五个相同的字母
    //      b. 虽然不是五个相同的字母，但是字符种类只有一种
    // 综上： 如果只需要插入1个字母，且字符种类只有一种时需要操作2次。其它情况均只需要考虑需要插入的个数即可
    if (needInsert == 1 && needChangeByKind == 2) {
      return 2
    }
    return needInsert
  }

  // 需要delete
  const needDelete = length - 20

  // 1.仅通过删除就可以解决多个字符连续问题，则直接返回needDelete+needChangeByKind
  const needDeleteByContinuous = continuousList.reduce((pre, continuous) => pre += (continuous - 2), 0)

  if (needDelete >= needDeleteByContinuous) {
    return needDelete + needChangeByKind
  }

  // 2.仅通过删除无法解决多个字符连续的问题，那么就需要删除连续字符，使得需要替换的字符数量最少
  // 2.1 先考虑删除一个连续的字符，就可以使得需要替换的字符减少一个的
  let remain = needDelete
  for (let i = 0; i < continuousList.length; i++) {
    const continuous = continuousList[i]

    if (continuous % 3 == 0) {
      continuousList[i] = continuous - 1
      if (--remain == 0) {
        break
      }
    }
  }
  // 2.2 再考虑删除两个连续的字符，就可以使得需要替换的字符减少一个的
  if (remain > 1) {
    for (let i = 0; i < continuousList.length; i++) {
      const continuous = continuousList[i]

      if ((continuous - 1) % 3 == 0) {
        continuousList[i] = continuous - 2
        if ((remain -= 2) < 2) {
          break
        }
      }
    }
  }
  // 2.3 再考虑删除三个连续的字符的情况
  while (remain > 2) {
    for (let i = 0; i < continuousList.length; i++) {
      const continuous = continuousList[i]

      if (continuous > 2) {
        continuousList[i] = continuous - 3
        if ((remain -= 3) < 3) {
          break
        }
      }
    }
  }
  // 经过以上删除步骤后，remain可能为0，1，2但这都不影响结果
  const needChangeByContinuous = continuousList.reduce((pre, continuous) => pre += Math.floor(continuous / 3), 0)

  return needDelete + Math.max(needChangeByContinuous, needChangeByKind)
}

// @lc code=end
