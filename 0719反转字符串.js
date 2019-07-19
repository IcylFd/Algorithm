// 反转字符串，输入为字符数组
// 必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

// js数组自带reverse方法

var reverseString = function(s) {
  let right = 0;
  let left = s.length - 1;
  while(right < left) {
    [s[right], s[left]] = [s[left], s[right]];
    right ++;
    left --;
  }
  return s;
}