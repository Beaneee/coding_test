function solution(want, number, discount) {
  let arr = [];
  let result = 0;
  for(let i = 0; i < discount.length; i++) {
    arr = discount.slice(i, i+10);

    let correctCount = 0;

    for(let idx = 0; idx < want.length; idx++) {
      const item = want[idx];
      const count = arr.filter((v) => v === item).length;

      if(count === number[idx] && count) {
        correctCount++;
      }
    }

    if(correctCount === want.length) {
      result++;
    }
  }
  return result;
}