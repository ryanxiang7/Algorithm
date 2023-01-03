/**
  使用hash表降低搜索target-num的复杂度 时间复杂度O(n) 空间复杂度O(n)
*/
const twoSum = function (nums, target) {
  const length = nums.length;
  let map = new Map();
  for (let i = 0; i < length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }
    map.set(nums[i], i);
  }
}
