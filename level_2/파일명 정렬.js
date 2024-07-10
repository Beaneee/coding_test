function solution(files) {

  //head, number, tail로 나눠보자
  files.forEach(file => {
    //number idx 찾기
    const strArr = splitStr(file);
    console.log(strArr);
  })
}

/**
 * number index 찾기
 * @param file
 * @returns {number}
 */
const findNumberIdx = (file) => {
  let startNumIdx = -1;
  let endNumIdx = -1;

  for (let i = 0; i < file.length; i++) {
    //number 시작
    if(startNumIdx === -1 && !isNaN(Number(file[i])) && file[i] !== ' ') {
      startNumIdx = i;
    }
    //number 끝
    if(startNumIdx !== -1 && (isNaN(Number(file[i])) || file[i] === ' ')) {
      endNumIdx = i - 1;
      return [startNumIdx, endNumIdx]
    }
  }

  return [startNumIdx, endNumIdx];
}

/**
 * head, number, tail로 나누기
 * @param file
 */
const splitStr = (file) => {
  const [startNumIdx , endNumIdx] = findNumberIdx(file);

  return [
    file.slice(0, startNumIdx),
    file.slice(startNumIdx, endNumIdx + 1),
    file.slice(endNumIdx + 1, endNumIdx + 2) === ' ' ? ' ' : file.slice(endNumIdx + 1)
  ]
}

