function solution(begin, target, words) {
  //만약 words target이 없다면 return 0
  if(!words.includes(target)) return 0

  //유사하고 가까운 문자열을 찾는거니까 bfs를 이용하는게 맞다.
  const queue = [];
  const visited = { [begin]: 0};

  queue.push(begin);

  while (queue.length > 0) {
    const currWord = queue.shift();

    if(currWord === target) break

    for (const word of words) {
      //연결된 node를 생각하는 게 핵심이다.
      if(isConnected(word, currWord) && !visited[word]) {
        visited[word] = visited[currWord] + 1;
        queue.push(word);
      }
    }
  }
  return  visited[target]
}

/**
 * 단 한 글자만 다르면 연결 nodee
 * @param str1
 * @param str2
 */
const isConnected = (str1, str2) => {
  let count = 0;

  for (let i = 0; i < str1.length; i++) {
    if(str1[i] !== str2[i]) count += 1;
  }
  return count === 1 ? true : false
}




