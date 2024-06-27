function solution(fees, records) {
  const vehTimeHash = {}; //입차 시간
  const accTimeHash = {}; //누적 시간

  //누적 주차 시간을 먼저 구해놓자.
  for (let i = 0; i < records.length; i++) {
    const [time, veh, type] = records[i].split(' ');
    //입차
    if (type === 'IN') {
      vehTimeHash[veh] = timeToMinutes(time);
    }

    //출차 시 누적 시간 저장
    if (type === 'OUT') {
      const entryTime = vehTimeHash[veh];
      const duration = timeToMinutes(time) - entryTime;

      //만약에 기존에 누적시간이 없다면 초기화를 하고
      if (!accTimeHash[veh]) {
        accTimeHash[veh] = 0;
      }
      accTimeHash[veh] += duration;
      delete vehTimeHash[veh]
    }
  }
  //입차는 됐지만, 출차가 안찍힌 것에 대한 나머지 처리가 필요하다.
  console.log('입차', vehTimeHash);
  console.log('누적', accTimeHash);
}
/**
 * 시간을 분으로 바꾸는 함수
 * @param time
 */
const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}