class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  sum() {
    return this.items.reduce((acc, curr) => acc += curr);
  }

  length() {
    return this.items.length;
  }

  isEmpty() {
    return this.front === this.rear;
  }
}


function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  const move_truck = new Queue();
  const pending_truck = new Queue();
  pending_truck.items = truck_weights;

  // 건너는 트럭과 대기중인 트럭이 모두 끝난 상태라면
  while (move_truck.isEmpty() && pending_truck.isEmpty()) {
    move_truck.push(pending_truck.pop());

    // 다리를 건너는 트럭들이 무게를 넘기지 않고
    if(move_truck.sum() < weight) {

    } else {

    }

    // 다리의 길이를 넘지 않는 만큼 건너는 트럭 배열에 넣고
    if(move_truck.length() < bridge_length) {

    } else {

    }

  }

  return time;
}