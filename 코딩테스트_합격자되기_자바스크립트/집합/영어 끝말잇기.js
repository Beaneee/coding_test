function solution(n, words) {
  const wordsSet = new Set();
  let flag = false;
  let endNum = 1;
  let lastStr = '';


  for (word of words) {
    // 1. 이미 말한 단어를 한 경우
    if (wordsSet.has(word)) {
      flag = true;
      break;
    }

    // 2. 잘못된 앞글자로 말한 경우
    if(lastStr && word[0] !== lastStr) {
      flag = true;
      break;
    }

    wordsSet.add(word);
    lastStr = word[word.length - 1];
    endNum++;
  }

  if(flag) {
    const dropout = endNum % n === 0 ? n : endNum % n; // 탈락자
    const dropoutOrder = Math.ceil(endNum / n); // 탈락 순서
    return [dropout, dropoutOrder];
  }

  // 3. 탈락자가 발생하지 않는 경우
  return [0, 0];
}