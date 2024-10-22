
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  getParentNodeIdx(idx) {
    return Math.floor((idx - 1) / 2)
  }

  getLeftIdx(idx) {
    return (idx * 2) + 1
  }

  getRightIdx(idx) {
    return (idx * 2) + 2
  }

  //add
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  //bubbleUp (추가)
  bubbleUp() {
    //새로운 노드를 부모 노드와 값을 비교한다.
    let newNodeIdx = this.size() - 1;
    let parentNodeIdx = this.getParentNodeIdx(newNodeIdx);
    //0을 포함하지 않기 때문에
    while (this.heap[parentNodeIdx] && this.heap[parentNodeIdx] < this.heap[newNodeIdx] ) {
      this.swap(newNodeIdx, parentNodeIdx);
      newNodeIdx = parentNodeIdx;
      parentNodeIdx = this.getParentNodeIdx(newNodeIdx);
    }
  }
  //bubbleDown (삭제)
  bubbleDown() {
    let idx = 0;

    while (true) {
      let leftIdx = this.getLeftIdx(idx);
      let rightIdx = this.getRightIdx(idx);
      let largerIdx = idx;

      // 왼쪽 자식이 존재하고, 현재 노드보다 큰 경우
      if (leftIdx < this.size() && this.heap[leftIdx] > this.heap[largerIdx]) {
        largerIdx = leftIdx;
      }

      // 오른쪽 자식이 존재하고, 현재 노드보다 큰 경우
      if (rightIdx < this.size() && this.heap[rightIdx] > this.heap[largerIdx]) {
        largerIdx = rightIdx;
      }

      // 더 이상 swap이 필요 없는 경우 루프 종료
      if (largerIdx === idx) break;

      // swap 후 계속 진행
      this.swap(idx, largerIdx);
      idx = largerIdx;
    }
  }

  //poll (추출)
  poll() {
    if(this.size() === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }
  result() {
    return this.heap
  }
}


//최대 힙으로 풀어야 한다. -> 가장 많은 일 부터 처리하기 위해서
function solution(n, works) {
  const residueWorks = works.reduce((acc, curr) => acc += curr, 0) - n;
  const heap = new MaxHeap();
  //업무시간 안에 모두 처리한 경우
  if(residueWorks <= 0) return 0;

  //heap 생성
  works.forEach(v => {
    heap.add(v);
  })

  //최댓값을 추출해서 비교
  for(let i = 0; i < n; i++) {
    const maxValue = heap.poll();
    heap.add(maxValue - 1);
  }

  const arr = heap.result().map(v => v ** 2);
  return arr.reduce((acc, curr) => acc += curr, 0)
}