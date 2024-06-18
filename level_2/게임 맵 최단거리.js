class Queue {
  constructor() {
    this.storage = {}
    this.front = 0;
    this.rear = 0;
  }

  //storage 크기
  size() {
    //아무것도 없을 때
    if(this.storage[this.rear] === undefined) return 0
    return (this.rear - this.front) + 1
  }

  deleteValue() {
    //앞에 있는 데이터가 뭔지 저장하고
    temp = this.storage[this.front];
    //storage에서 삭제하고
    delete this.storage[this.front];
    return temp
  }

  //데이터 추가
  push(value) {
    //초기일 경우
    if(this.size() === 1) {
      this.storage['0'] = value;
      return
    }
    this.rear += 1;
    this.storage[this.rear] = value;
  }

  //데이터 추출
  shift() {
    let temp = null;
    //size가 1일 경우
    if(this.size() === 1) {
      temp = deleteValue();
      //모두 제거했으니까 초기화
      this.front = 0;
      this.rear = 0;
    } else { //size가 1이상 일 경우
      temp = deleteValue();
      //front를 1 늘려야함
      this.front += 1;
    }
    return temp;
  }
}

function solution(maps) {
  var answer = 0;
  return answer;
}