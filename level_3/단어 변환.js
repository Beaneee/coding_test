function solution(begin, target, words) {
  //변환할 수 있는 단어들을 뽑아서
  const wordList = getEnableWordList(words);
  //begin에서 target으로 변하려면 어떤 문자가 바뀌어야 하는지 찾고
  let changedList = getChagedWordList(begin, target);

  //만약 words target이 없다면 return 0
  if(!words.includes(target)) return 0

  let step = 0;
  let str = begin;

  while (true) {

    if(str === target) {
      break
    }

    //wordList에서 idx가 가장 가까운 것 부터 바꾸면서
    const changeStr = wordList.find(v => changedList.includes(v));
    const changeIdx = changedList.findIndex(v => v === changeStr);

    str = str.split('');
    str[changeIdx] = changeStr;
    str = str.join('');

    if(words.includes(str)) {
     step += 1;
    }

    changedList.splice(changeIdx, 1);
  }
  return step;
}

/**
 * 바꿀 수 있는 문자열 리스트
 * @param word
 */
const getEnableWordList = (words) => {
  return [...new Set(words.join('').split(''))];
}

/**
 * 바뀌어야 하는 단어 리스트
 * @param begin
 * @param target
 */
const getChagedWordList = (begin, target) => {
  const beginList = begin.split('');
  const targetList = target.split('');



  return targetList.filter(word => !beginList.includes(word))
}



