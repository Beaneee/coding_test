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
    if(!this.root) {
      // 노드를 새로 생성한다.
      // 생성된 노드를 root로 한다.
      this.root = new Node(key);
      return;  // 루트가 생성되었으면 더 이상 진행하지 않는다.
    }

    // root가 있을 경우
    let curr = this.root;
    while (true) {
      // key가 부모 노드 보다 작다.
      if (key < curr.value) {
        // 왼쪽 노드가 있다 없다를 확인한 후
        if (curr.left) {
          // 왼쪽 노드로 할당한다.
          curr = curr.left;
        } else {
          curr.left = new Node(key);
          break;
        }
      }

      // key가 root보다 크다.
      else if (key > curr.value) {
        // 오른쪽 노드가 있다 없다를 확인한 후
        if (curr.right) {
          // 오른쪽 노드로 할당한다.
          curr = curr.right;
        } else {
          curr.right = new Node(key);
          break;
        }
      }

      // key가 curr.value와 같을 경우 (중복된 값은 삽입하지 않음)
      else {
        break;  // 이미 트리에 값이 존재하므로 종료
      }
    }
  }


  // 탐색 트리로 검색
  search(key) {
    let curr = this.root;

    while (curr && curr.value !== key) {
      if (key < curr.value) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return curr;
  }

}

const solution = (lst, searchList) => {
  const bst = new BST();
  const result = [];
  // 탐색 트리 생성
  for (const node of lst) {
    bst.insert(node);
  }

  // 탐색 트리로 검색
  for (const searchNode of searchList) {
    if(bst.search(searchNode)?.value) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}

console.log(solution([5,3,8,4,2,1,7,10], [1,2,5,6]));
console.log(solution([1,3,5,7,9], [2,4,6,8,10]));
