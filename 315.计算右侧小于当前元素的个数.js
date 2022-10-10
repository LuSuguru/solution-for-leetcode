/*
 * @lc app=leetcode.cn id=315 lang=javascript
 *
 * [315] 计算右侧小于当前元素的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 二叉搜索
function countSmaller(nums) {
  const { length } = nums
  const result = new Array(length).fill(0)
  let root = null

  const insertTree = (root, num, index) => {
    if (!root) {
      root = new TreeNode(num, 0, null, null)
    } else if (num <= root.val) {
      root.leftNum++
      root.left = insertTree(root.left, num, index)
    } else {
      result[index] += root.leftNum + 1
      root.right = insertTree(root.right, num, index)
    }
    return root
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    root = insertTree(root, nums[i], i)
  }

  return result
}

function TreeNode(val, leftNum, left, right) {
  this.val = val
  this.leftNum = leftNum
  this.left = left
  this.right = right
}

// 树状数组
class BinaryIndexTree {
  defaultValue;
  operation;
  size;

  static lowbit(x) {
    return x & -x;
  }
  #tree;
  constructor(size, operation = (a, b) => a + b, defaultValue = 0) {
    this.size = size;
    this.#tree = Array(size + 1).fill(defaultValue);
    this.operation = operation;
    this.defaultValue = defaultValue;
  }
  update(i, value) {
    for (let p = i; p <= this.size; p += BinaryIndexTree.lowbit(p)) {
      this.#tree[p] = this.operation(this.#tree[p], value);
    }
  }
  query(n) {
    let ans = this.defaultValue;
    for (let p = n; p > 0; p -= BinaryIndexTree.lowbit(p)) {
      ans = this.operation(ans, this.#tree[p]);
    }
    return ans;
  }

}

function countSmaller(nums) {
  // 最大 20001 个
  const bit = new BinaryIndexTree(20001);
  const ans = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    // 负数转正
    const pos = num + 10001;

    bit.update(pos, 1);
    ans.push(bit.query(pos - 1));
  }
  return ans.reverse();
}


// @lc code=end
