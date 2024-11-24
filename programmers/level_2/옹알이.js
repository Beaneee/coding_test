function solution(babbling) {
  const wordArr = ['aya', 'ye', 'woo', 'ma'];
  const stack = [];

  let result = 0;

  // babbling를 순회하면서
  babbling.forEach(str => {
    let start = 0;
    // 가능한 단어를 찾는다.
    for(let i = 1; i <= str.length; i++) {

      const word = str.slice(start, i);


      if(wordArr.includes(word)) {
        stack.push(word);
        start = i;

      } else {
        stack.pop();
      }

    }

    // 가능한 단어의 연속이면 +1 해준다.
    if(stack.length > 0) {
      result++;
    }
  })

  return result;
}