/**
 * root 노드가 무엇인지 계속 탐색하는것
 * @param parents
 * @param x
 * @returns {*}
 */
const find = (parents, x) => {
  // 자기자신을 참조하면 root노드
  if(parents[x] === x) {
    return x;
  }

  // 경로 압축
  parents[x] = find(parents, parents[x]);
  return parents[x];
}

/**
 * root 노드끼리 합치는것
 * @param parents
 * @param x
 * @param y
 */
const union = (parents, x, y) => {
  const rootX = find(parents, x);
  const rootY = find(parents, y);

  // rootY가 항상 작다고 가정하면.
  parents[rootY] = rootX;
}

const solution = (k, operations) => {
  // 처음에는 각 노드가 자기 자신을 부모로 가지도록 초기화
  const parents = Array.from({ length: k }, (_, i) => i);

  let n = k;
  for (const op of operations) {
    const action = op[0];

    if(action === 'u') {
      union(parents, op[1], op[2]);
    }

    if(action === 'f') {
      find(parents, op[1]);
    }

    n = new Set(Array.from({length : k}, (_,i) => find(parents, i))).size;
  }

  return n;
}

console.log(solution(3, [['u',0,1], ['u',1,2], ['f',2]])); // 1
console.log(solution(4, [['u',0,1], ['u',2,3], ['f',0]])); // 2

