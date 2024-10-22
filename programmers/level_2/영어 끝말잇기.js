function solution(n, words) {
  let prevWordList = [];
  let result = [];

  for(let i = 0; i < words.length; i++) {
    //1. 중복된 단어를 말하거나
    if(prevWordList.includes(words[i])) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    if(prevWordList[i-1]) {
      const lastOfPrevWord = prevWordList[i-1].charAt(prevWordList[i-1].length - 1);
      const firstOfCurrWord = words[i].charAt(0); 
      //2. 잘못된 단어를 말한 경우
      if(lastOfPrevWord !== firstOfCurrWord) {
        return [(i % n) + 1, Math.floor(i / n) + 1];
      }

    }
    prevWordList.push(words[i]);
  }
  //3. 틀린 사람이 없는 경우는 [0, 0]을 return
  return [0, 0];
}