// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let countZeros = 0;
  while(nums.indexOf(0) !== -1) {
      nums.splice(nums.indexOf(0), 1);
      countZeros++;
  }
  while(countZeros !== 0) {
      nums.push(0);
      countZeros--;
  }
};