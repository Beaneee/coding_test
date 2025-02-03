class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  length() {
    return this.rear - this.front;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  frontItem() {
    return this.items[this.front];
  }
}

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge_weight = 0;
  const move_truck = new Queue();
  const pending_truck = new Queue();

  for (const truck of truck_weights) {
    pending_truck.push({ weight: truck });
  }

  while (!pending_truck.isEmpty() || !move_truck.isEmpty()) {
    time++;

    // 다리를 건넌 트럭 제거
    if (!move_truck.isEmpty() && move_truck.frontItem().time === time) {
      const passed_truck = move_truck.pop();
      bridge_weight -= passed_truck.weight;
    }

    // 새로운 트럭 추가 가능 여부 확인
    if (
      !pending_truck.isEmpty() &&
      bridge_weight + pending_truck.frontItem().weight <= weight &&
      move_truck.length() < bridge_length
    ) {
      const truck = pending_truck.pop();
      move_truck.push({ weight: truck.weight, time: time + bridge_length });
      bridge_weight += truck.weight;
    }
  }

  return time;
}
