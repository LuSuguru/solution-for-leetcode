/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

function trap(height) {
  const { length } = height
  let result = 0

  let max = 0
  let maxIndex = 0
  for (let i = 0; i < length; i++) {
    if (height[i] > max) {
      max = height[i]
      maxIndex = i
    }
  }

  let leftMax = 0
  for (let i = 0; i < maxIndex; i++) {
    if (height[i] > leftMax) {
      leftMax = height[i]
    } else {
      result += leftMax - height[i]
    }
  }

  let rightMax = 0
  for (let j = length - 1; j > maxIndex; j--) {
    if (height[j] > rightMax) {
      rightMax = height[j]
    } else {
      result += rightMax - height[j]
    }
  }

  return result
}

// 双指针
function trap(height) {
  let result = 0

  let left = 0
  let right = height.length - 1

  let leftMax = 0
  let rightMax = 0

  while (left < right) {
    leftMax = Math.max(leftMax, height[left])
    rightMax = Math.max(rightMax, height[right])

    if (height[left] < height[right]) {
      result += leftMax - height[left]
      ++left
    } else {
      result += rightMax - height[right]
      --right
    }
  }
  return result
}

//动态规划
function trap(height) {
  const n = height.length;
  if (n == 0) {
    return 0;
  }

  const leftMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  for (let i = 1; i < n; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  let ans = 0;
  for (let i = 0; i < n; ++i) {
    ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
};

// @lc code=end
