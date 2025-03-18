function solution(nums) {
  // nums에 중복된걸 제거하고
  const setNums = new Set(nums);
  // 선택할 수 있는 수
  const choiceNum = nums.length / 2;
  // 선택할 수 있는 수보다 setNums.size가 작으면 setNums.size밖에 선택할 수 없다.
  // 선택할 수 있는 수가 setNums.size보다 크다면 선택할 수 있는 수만큼 종류를 return

  // 저 둘 중 작은 값을 return
}