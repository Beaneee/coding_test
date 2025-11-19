class Node {
  constructor(info, num, left = null, right = null) {
    this.info = info; // 노드의 좌표 정보 저장
    this.left = left; // 노드의 왼쪽 자식
    this.right = right; // 노드의 오른쪽 자식
    this.num = num; // 노드의 번호
  }
}

const BST = (nodeinfo) => {
  // 이진트리 구성
  const nodes = Array.from({ length: nodeinfo.length }, (_, i) => i + 1);

  // y값이 클수록 우선순위가 높다.
  // y값이 같다면 x가 작은게  우선순위가 높다
  nodes.sort((a, b) => {
    const [ax, ay] = nodeinfo[a - 1];
    const [bx, by] = nodeinfo[b - 1];
    return ay === by ? ax - bx : by - ay
  })


  let root = null;

  for (const node of nodes) {
    // root 초기화
    if (!root) {
      root = new Node(nodeinfo[node - 1], node);
    } else {
      // root부터 시작
      let curr = root;
      const newNode = new Node(nodeinfo[node - 1], node);

      while(true) {
        // 왼쪽 확인
        if (curr.info[0] > newNode.info[0]) {
          // 왼쪽이 있는지 확인
          if(curr.left) {
            curr = curr.left;
            continue;
          }
          curr.left = newNode;
          break;
        }

        // 오른쪽 확인
        if (curr.info[0] <= newNode.info[0]) {
          // 오른쪽이 있는지 확인
          if(curr.right) {
            curr = curr.right;
            continue;
          }
          curr.right = newNode;
          break;
        }
      }
    }
  }
  return root;
}


function solution(nodeinfo) {
  const root = BST(nodeinfo);
  console.log(root);
}