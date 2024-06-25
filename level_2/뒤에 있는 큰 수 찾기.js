function solution(numbers) {
  let answer = new Array(numbers.length).fill(-1); // 초기화
  let stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    const currNumber = numbers[i];
    //만약 stack의 가장 마지막 요소가 currNumber보다 작다면 pop()
    //예를 들어, 3 - 5중에서 5가 더 크므로 3을 빼준다.
    while (stack.length > 0 && stack[stack.length - 1] <= currNumber) {
      stack.pop();
    }

    if(stack.length > 0) {
      answer[i] = stack[stack.length - 1]
    }
    //그리고 currNumber를 push해준다.
    //현재 flow에서 가장 큰 값은 stack의 가장 마지막 요소이다.
    stack.push(currNumber);
  }

  return answer;
}