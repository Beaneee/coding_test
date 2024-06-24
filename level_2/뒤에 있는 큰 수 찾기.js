function solution(numbers) {
  let answer = [];

  while (numbers.length > 0) {
    //비교하려는 숫자
    let compareNumber = numbers[0];
    //비교하려는 숫자보다 큰 수 list
    const lageNumbers = numbers.filter(num => num > compareNumber);

    answer.push(lageNumbers.length > 0 ? lageNumbers[0] : -1);

    numbers.splice(0, 1);
  }
  return answer;
}