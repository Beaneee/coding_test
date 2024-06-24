function solution(numbers) {
  let answer = [];
  let targetIdx = 0;
  while (numbers.length - 1 >= targetIdx) {
    //비교하려는 숫자
    let compareNumber = numbers[targetIdx];
    //비교하려는 숫자보다 큰 수
    //filter를 쓰지말고 find로 바꾸자.
    //최악의 경우 O(n) (모든 요소를 검사할 수 있지만, 첫 번째 요소를 찾으면 즉시 종료).
    const lageNumber = numbers.find((num, idx) => idx > targetIdx && num > compareNumber);
    answer.push(lageNumber ?? -1);
    targetIdx += 1;
  }
  return answer;
}