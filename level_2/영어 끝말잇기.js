function solution(n, words) {
  let prevWordList = [];
  let result = [];

  for(let i = 0; i < words.length; i++) {
    //1. 중복된 단어를 말하거나
    if(prevWordList.includes(words[i])) {
      const count = n < i ? Math.floor(i / n) : Math.floor(n / i);
      const remainder = n < i ? (i + 1) % n : n % (i + 1);
      return [remainder === 0 ? n : remainder, count + 1];
    }

    if(prevWordList[i-1]) {
      const lastOfPrevWord = prevWordList[i-1].charAt(prevWordList[i-1].length - 1);
      const firstOfCurrWord = words[i].charAt(0); 
      //2. 잘못된 단어를 말한 경우
      if(lastOfPrevWord !== firstOfCurrWord) {
        const count = n < i ? i / n : n / i;
        const remainder = n < i ? (i + 1) % n : n % (i + 1);
        return [remainder === 0 ? n : remainder, count + 1];
      }

    }
    prevWordList.push(words[i]);
  }
  //3. 틀린 사람이 없는 경우는 [0, 0]을 return
  return [0, 0];
}