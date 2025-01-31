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
    return this.items.reduce((acc, curr) => acc += curr, 0);
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

  for (const truck of truck_weights) {
    pending_truck.push(truck);
  }

  // 건너는 트럭과 대기중인 트럭이 모두 끝난 상태라면
  while (!pending_truck.isEmpty()) {
    time++;

    // 다리를 건넌 트럭 제거
    // 트럭이 다리에서 머무는 시간을 관리해야 함.
    if(!move_truck.isEmpty()) {

    }

    // 새로운 트럭 추가 가능 여부 확인
    // truck_weights가 있고
    // bridge_weight와 truck_weights의 front의 합이 weight와 같거나 작고
    // 이동중인 bridge의 차 대수가 bridge_length보다 작을 때

    if(move_truck.sum() <= weight && move_truck.length() <= bridge_length) {
      // pop해서
      // 무게와 끝나는 시간을 move_truck에 push한다.
    }

  }

  return time;
}