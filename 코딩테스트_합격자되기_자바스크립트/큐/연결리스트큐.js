class Node {
  constructor(data) {
    this.data = data; // value
    this.next = null; /// 다음 요소를 참조
  }
}

class Queue {
  constructor() {
    this.head = null; // 첫 번째 요소 참조
    this.tail = null // 마지막 요소 참조
    this.size = 0;
  }

  push(data) {
    // 새로운 요소를 생성
    const newNode = new Node(data);

    if(!this.head) { // queue가 비어있다면
      this.head = newNode;
      this.tail = newNode;
    } else { // 비어있지 않다면
      this.tail.next = newNode; // 기존 tail의 next를 새 노드로 연결
      this.tail = newNode; // tail을 새 노드로 갱신
    }

    this.size++;
  }

  pop() {
    // queue가 비어있다면
    if(!this.head) {
      return null
    }

    // 두 번째 요소를 head의 참조로 변경하면
    // 자연스럽게 첫 번째 요소가 사라짐
    const removeNode = this.head;
    this.head = this.head.next;

    // 만약 두 번째 요소가 없었다면
    // 큐가 비어 있다는 뜻이니 tail도 null로 설정
    if(!this.head) {
      this.tail = null;
    }

    this.size--;
    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0
  }

}