function solution(cards1, cards2, goal) {

  while (goal.length > 0) {
    const front = goal.shift();

    if(cards1[0] === front) {
      cards1.shift();
    }

    if(cards2[0] === front) {
      cards2.shift();
    }
  }

  return (cards1.length === 0 && cards2.length === 0) ? 'Yes' : 'No'
}