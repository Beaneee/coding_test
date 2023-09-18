function solution(n, words) {
  let answer = [];
  let arr = [];
  let nth = 0;
  for(let i = 0; i < words.length; i++) {
      //같은 단어일 경우;
      if(arr.includes(words[i])) {
          nth = (i % n) + 1;
          return
      } 
      //잘못된 단어로 끝말잇기를 할 경우;
      arr.push(words[i]);
      if(arr[i-1]) {
          let lastWord = arr[i-1].charAt(arr[i-1].length-1);
          let firstWord = arr[i].charAt(0);
          console.log(lastWord, firstWord);
      }
  }
  answer[0] = nth;
  return answer;
}