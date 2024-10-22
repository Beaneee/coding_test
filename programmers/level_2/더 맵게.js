class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftIdx(idx) {
    return (idx * 2) + 1
  }

  getRightIdx(idx) {
    return (idx * 2) + 2
  }
  
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  //추가
  bubbleUp() {
    let newNodeIdx = this.size() - 1;
    let parentIdx = this.getParentIdx(newNodeIdx);

    while( this.heap[parentIdx] !== undefined && this.heap[parentIdx] > this.heap[newNodeIdx] ) {
      this.swap(newNodeIdx, parentIdx);
      newNodeIdx = parentIdx;
      parentIdx = this.getParentIdx(newNodeIdx);
    }
  }

  //삭제
  bubbleDown() {
    let idx = 0;

    while (true) {
      let leftIdx = this.getLeftIdx(idx);
      let rightIdx = this.getRightIdx(idx);
      let smallerIdx = idx;

      // 왼쪽 자식이 존재하고, 현재 노드보다 작은 경우
      if (leftIdx < this.size() && this.heap[leftIdx] < this.heap[smallerIdx]) {
        smallerIdx = leftIdx;
      }

      // 오른쪽 자식이 존재하고, 현재 노드보다 작은 경우
      if (rightIdx < this.size() && this.heap[rightIdx] < this.heap[smallerIdx]) {
        smallerIdx = rightIdx;
      }

      // 더 이상 swap이 필요 없는 경우 루프 종료
      if (smallerIdx === idx) break;

      // swap 후 계속 진행
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
    }
  }
  
  //최솟값 삭제
  poll() {
    if(this.heap.length === 1) {
      return this.heap.pop();
    }

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value
  }

  result() {
    return this.heap
  }

}

function solution(scoville, K) {
  const minHeap = new MinHeap();
  //heap 생성
  scoville.forEach(v => {
    minHeap.add(v)
  })

  let heap = minHeap.result();
  let count = 0;
  //heap의 길이가 1이면 종료 && heap[0] 최솟값이 K보다 크거나 같을 경우 종료
  while(heap.length > 1 && heap[0] < K) {
    count += 1;
    let min1 = minHeap.poll();
    let min2 = minHeap.poll();
    let newScoville = min1 + (min2 * 2);
    minHeap.add(newScoville);
    heap = minHeap.result();
  }
  
  if(heap[0] < K) return -1

  return count;
}