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
    let leftIdx = this.getLeftIdx(idx);
    let rightIdx = this.getRightIdx(idx);

    while(
      (this.heap[leftIdx] !== undefined && this.heap[leftIdx] < this.heap[idx]) ||
      (this.heap[rightIdx] !== undefined && this.heap[rightIdx] < this.heap[idx])
    ) {
      let smallerIdx = leftIdx;

      if(this.heap[rightIdx] !== undefined && this.heap[rightIdx] < this.heap[leftIdx]) {
        smallerIdx = rightIdx;
      }
      this.swap(idx, smallerIdx);
      idx = smallerIdx;
      leftIdx = this.getLeftIdx(idx);
      rightIdx = this.getRightIdx(idx);
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
  
  while(heap.length > 1 && heap[0] <= K) {
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