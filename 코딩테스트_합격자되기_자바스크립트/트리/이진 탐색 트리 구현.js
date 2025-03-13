class Node {
  constructor(key) {
    this.left = null;
    this.right = null;
    this.value = key;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // 탐색 트리 생성
  insert(key) {
    // root가 없을 경우
    if(this.root) {
      // 노드를 새로 생성한다.
      // 생성된 노드를 root로 한다.
    }

    // root가 있을 경우
    if(!this.root) {
      // key가 부모 노드 보다 작다.
      // 왼쪽 노드가 있다 없다를 확인한 후
      // 왼쪽 노드로 할당한다.


      // key가 root보다 크다.
      // 오른쪽 노드가 있다 없다를 확인한 후
      // 오른쪽 노드로 할당한다.
    }

  }

  // 탐색 트리로 검색
  search(key) {
    // 현재 값이 부모다 -> return

    // 현재 값이 부모보다 작다 -> 왼쪽 노드 탐색
    // 현재 값이 부모보다 크다 -> 오른쪽 노드 탐색
  }

}

const solution = (lst, searchList) => {
  const bst = new BST();
  // 탐색 트리 생성
  for (const node of lst) {
    bst.insert(node);
  }

  // 탐색 트리로 검색
}

console.log(solution([5,3,8,4,2,1,7,10], [1,2,5,6]));
console.log(solution([1,3,5,7,9], [2,4,6,8,10]));
