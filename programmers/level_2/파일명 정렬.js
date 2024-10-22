function solution(files) {
  let arr = files.map(file => splitStr(file));

  // HEAD와 NUMBER를 기준으로 정렬
  arr.sort((a, b) => {
    const headCompare = a[0].toUpperCase().localeCompare(b[0].toUpperCase());
    if (headCompare !== 0) return headCompare;

    const numA = parseInt(a[1], 10);
    const numB = parseInt(b[1], 10);
    return numA - numB;
  });

  return arr.map(v => v.join(''));
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
    // number 시작
    if (startNumIdx === -1 && !isNaN(Number(file[i])) && file[i] !== ' ') {
      startNumIdx = i;
    }
    // number 끝
    if (startNumIdx !== -1 && (isNaN(Number(file[i])) || file[i] === ' ')) {
      endNumIdx = i - 1;
      break;
    }
  }

  // 파일의 끝까지 숫자가 있는 경우
  if (startNumIdx !== -1 && endNumIdx === -1) {
    endNumIdx = file.length - 1;
  }

  return [startNumIdx, endNumIdx];
}

/**
 * head, number, tail로 나누기
 * @param file
 */
const splitStr = (file) => {
  const [startNumIdx, endNumIdx] = findNumberIdx(file);

  return [
    file.slice(0, startNumIdx),
    file.slice(startNumIdx, endNumIdx + 1),
    file.slice(endNumIdx + 1)
  ];
}

