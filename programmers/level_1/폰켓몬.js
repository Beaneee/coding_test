function solution(nums) {
  // nums에 중복된걸 제거하고
  const setNums = new Set(nums);
  // 선택할 수 있는 수
  const choiceNum = nums.length / 2;
  return Math.min(setNums.size, choiceNum);
}