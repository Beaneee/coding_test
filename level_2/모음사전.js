function solution(word) {
  let resultArr = [];
  dfs('', resultArr);
  return resultArr.indexOf(word);
}

const dfs = (str, arr) => {
  const strArr = ['A', 'E', 'I', 'O', 'U'];

  if(str.length > 5) return;

  if(arr.includes(str)) return;

  arr.push(str);

  strArr.forEach(v => {
    dfs(str + v, arr);
  })
}

/**
 * DFS 함수는 각 호출마다 5개의 자식 노드를 가지게 된다.. 따라서 각 단계에서 현재 단어에 'A', 'E', 'I', 'O', 'U'를 순서대로 붙여서 새로운 단어를 만든다..
 *
 * 1. dfs('', resultArr) 시작:
 * resultArr에 '' 추가
 * 다음 호출: dfs('A', resultArr), dfs('E', resultArr), dfs('I', resultArr), dfs('O', resultArr), dfs('U', resultArr)
 *
 * 2. dfs('A', resultArr):
 * resultArr에 'A' 추가
 * 다음 호출: dfs('AA', resultArr), dfs('AE', resultArr), dfs('AI', resultArr), dfs('AO', resultArr), dfs('AU', resultArr)
 *
 * 3. dfs('AA', resultArr):
 * resultArr에 'AA' 추가
 * 다음 호출: dfs('AAA', resultArr), dfs('AAE', resultArr), dfs('AAI', resultArr), dfs('AAO', resultArr), dfs('AAU', resultArr)
 *
 * 4. dfs('AAA', resultArr):
 * resultArr에 'AAA' 추가
 * 다음 호출: dfs('AAAA', resultArr), dfs('AAAE', resultArr), dfs('AAAI', resultArr), dfs('AAAO', resultArr), dfs('AAAU', resultArr)
 *
 * 5. dfs('AAAA', resultArr):
 * resultArr에 'AAAA' 추가
 * 다음 호출: dfs('AAAAA', resultArr), dfs('AAAAE', resultArr), dfs('AAAAI', resultArr), dfs('AAAAO', resultArr), dfs('AAAAU', resultArr)
 *
 * 6.dfs('AAAAA', resultArr):
 * resultArr에 'AAAAA' 추가
 * 다음 호출: dfs('AAAAAA', resultArr), dfs('AAAAAE', resultArr), dfs('AAAAAI', resultArr), dfs('AAAAAO', resultArr), dfs('AAAAAU', resultArr)
 * 그러나, 이 호출들은 모두 길이가 5를 초과하기 때문에 즉시 반환한다.
 *
 * 7.dfs('AAAAE', resultArr):
 * resultArr에 'AAAAE' 추가
 * 다음 호출: dfs('AAAAEA', resultArr), dfs('AAAAEE', resultArr), dfs('AAAAEI', resultArr), dfs('AAAAEO', resultArr), dfs('AAAAEU', resultArr)
 * 그러나, 이 호출들은 모두 길이가 5를 초과하기 때문에 즉시 반환한다.
 *
 * 8. dfs('AAAAI', resultArr):
 * resultArr에 'AAAAI' 추가
 * 다음 호출: dfs('AAAAIA', resultArr), dfs('AAAAIE', resultArr), dfs('AAAAII', resultArr), dfs('AAAAIO', resultArr), dfs('AAAAIU', resultArr)
 * 그러나, 이 호출들은 모두 길이가 5를 초과하기 때문에 즉시 반환한다.
 *
 * 9. dfs('AAAAO', resultArr):
 * resultArr에 'AAAAO' 추가
 * 다음 호출: dfs('AAAAOA', resultArr), dfs('AAAAOE', resultArr), dfs('AAAAOI', resultArr), dfs('AAAAOO', resultArr), dfs('AAAAOU', resultArr)
 * 그러나, 이 호출들은 모두 길이가 5를 초과하기 때문에 즉시 반환한다.
 *
 * 10. dfs('AAAAU', resultArr):
 * resultArr에 'AAAAU' 추가
 * 다음 호출: dfs('AAAAUA', resultArr), dfs('AAAAUE', resultArr), dfs('AAAAUI', resultArr), dfs('AAAAUO', resultArr), dfs('AAAAUU', resultArr)
 * 그러나, 이 호출들은 모두 길이가 5를 초과하기 때문에 즉시 반환한다.
 *
 * 11. dfs('AAAAU', resultArr) 이후에는 'AAAE'가 아닌 'AAAE'로 넘어간다. 이는 'AAAAU'의 재귀 호출이 끝난 후, 상위 호출인 'AAAA'로 돌아가서 'AAAE'로 이동하기 때문이다.
 */