function solution(files) {
  let arr = [];
  //head, number, tail로 나눠보자
  files.forEach(file => {
    //number idx 찾기
    const strArr = splitStr(file);
    arr.push(strArr)
  })
  //먼저 head로 정렬
  const isSameHead = arr.every(v => v[0].toUpperCase() === arr[0][0].toUpperCase());
  isSameHead ? arr : arr.sort((a, b) => a[0].localeCompare(b[0]));
  if(!isSameHead) return arr.map(v => v.join(''))

  //head가 같다면 number로 정렬
  const isSameNumber = arr.every(v => v[1] === arr[0][1]);
  isSameNumber ? arr : arr.sort((a, b) => a[1] - b[1]);
  if(!isSameHead) return arr.map(v => v.join(''))

  //둘 다 차이가 없다면, 순서 유지
  return arr.map(v => v.join(''))
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
    // file.slice(endNumIdx + 1, endNumIdx + 2) === ' ' ? ' ' : file.slice(endNumIdx + 1)
    file.slice(endNumIdx + 1)
  ]
}

