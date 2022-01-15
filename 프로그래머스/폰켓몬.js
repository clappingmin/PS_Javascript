function solution(nums) {

  let cnt = 0;
  let temp = [];

  for (let i = 0; i < nums.length; i++) {
    if (cnt == nums.length / 2) {
      return cnt;
    }
    if (!temp.includes(nums[i])) {
      cnt += 1;
      temp.push(nums[i]);
    }
  }
  return cnt;
}