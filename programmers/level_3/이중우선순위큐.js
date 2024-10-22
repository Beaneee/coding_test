//heap으로 풀어보자.
class MinHeap {
  constructor() {
    //힙을 저장할 배열
    this.heap = [];
  }
  //힙의 크기를 반환하는 method
  size() {
    return this.heap.length;
  }
  // 두 값을 바꿔주는 메서드
  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }
  // 새로운 노드를 추가하는 메서드
  add(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  
  //부모 노드 구하기
  setParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  //left idx
  setLeftIdx(idx) {
    return idx * 2 + 1;
  } 

  //right idx
  setRigthIdx(idx) {
    return idx * 2 + 2;
  }

  //bubbleUp (추가)
  bubbleUp() {
    //새로운 노드와 그에 대한 부모 노드를 비교한다.
    let newNodeIdx = this.size() - 1;
    let parentIdx = this.setParentIdx(newNodeIdx);
    //새로운 노드가 부모 노드보다 작을 때 까지 swap한다.
    while( this.heap[parentIdx] && this.heap[parentIdx] > this.heap[newNodeIdx]) {
      this.swap(newNodeIdx, parentIdx);
      newNodeIdx = parentIdx;
      parentIdx = this.setParentIdx(newNodeIdx);
    }
  }
  
  //bubbleDown (삭제)
  bubbleDown(idx = 0) {
    let leftIdx = this.setLeftIdx(idx);
    let rightIdx = this.setRigthIdx(idx);
    //자식 노드 중에 어느 하나라도 idx보다 작은 값이면 계속 반복
    while(
      (this.heap[leftIdx] && this.heap[leftIdx] < this.heap[idx]) ||
      (this.heap[rightIdx] && this.heap[rightIdx] < this.heap[idx])
    ) {
      let smallIdx = leftIdx;

      if(this.heap[rightIdx] && this.heap[rightIdx] < this.heap[leftIdx]) {
        smallIdx = rightIdx;
      }
      this.swap(idx, smallIdx);
      idx = smallIdx;
      leftIdx = this.setLeftIdx(idx);
      rightIdx =  this.setRigthIdx(idx);
    }
  }

  //최댓값 idx 찾기
  findMaxIdx() {
    const n = this.heap.length;
    if(n === 0) return
    //리프노드 시작 idx
    const leafNodeStartIdx = Math.floor(n / 2);
    let maxIdx = leafNodeStartIdx;

    for(let i = leafNodeStartIdx + 1; i < n; i++) {
      if(this.heap[i] > this.heap[maxIdx]) {
        maxIdx = i
      }
    }

    return maxIdx ?? null
  }

  //최댓값 삭제
  deleteMax() {
    const maxIdx = this.findMaxIdx();
    if(!maxIdx) return;
    const lastIdx = this.size() - 1;
    
    if(maxIdx !== lastIdx) {
      this.swap(maxIdx, lastIdx);
    }
    this.heap.pop()
    this.bubbleDown(maxIdx);
  }

  deleteMax() {
    const maxIdx = this.findMaxIdx();
    if (maxIdx === undefined) return;
    const lastIdx = this.size() - 1;
    if (maxIdx !== lastIdx) {
      this.swap(maxIdx, lastIdx);
    }
    this.heap.pop();
    this.bubbleDown(maxIdx);
  }


  deleteMin() {
    if (this.size() === 0) return;
    if (this.size() === 1) {
      this.heap.pop();
      return;
    }
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
  }

  //최솟값 or 최대값 return
  result() { 
    if (this.size() === 0) return [0, 0];
    if (this.size() === 1) return [this.heap[0], this.heap[0]];

    const maxIdx = this.findMaxIdx();

    const min = this.heap[0];
    const max = this.heap[maxIdx]
    return [max, min]
  }
}

//heap 이용해서 풀기
function solution(operations) {

  const heap = new MinHeap();

  operations.forEach(v => {
    const arr = v.split(' ');
    const key = arr[0];
    const value = arr[1];

    switch (key) {
      case 'I':
        heap.add(Number(value))
        break;
      case 'D':
        //최대값 삭제
        if(value === '1') {
          heap.deleteMax();
          return
        }
        //최솟값 삭제
        heap.deleteMin();
        break;
      default:
        break;
    }
  })

  return heap.result();
}

