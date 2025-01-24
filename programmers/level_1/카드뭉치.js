function solution(cards1, cards2, goal) {
  const result = [];

  for (const el of goal) {
    let text = '';

    if(cards1[0] === el) {
      text = cards1.shift();
    }

    if(cards2[0] === el) {
      text = cards2.shift();
    }

    if(!text) continue;
    result.push(text);
  }

  let answer = 'Yes';

  // 모두 사용하는게 아니라 만들 수 있으면 Yes 였다.
  for (let i = 0; i < result.length; i++) {
    if(result[i] !== goal[i]) {
      answer = 'No'
    }
  }

  return answer;
}