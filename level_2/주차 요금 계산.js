function solution(fees, records) {
  const vehTimeHash = {}; //입차 시간
  const parkTimeHash = {}; //누적 시간

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
      calculateParkingTime(entryTime, time, veh, parkTimeHash, vehTimeHash);
    }
  }
  //입차는 됐지만, 출차가 안찍힌 것에 대한 나머지 처리가 필요하다.
  Object.entries(vehTimeHash).forEach(v => {
    const veh = v[0];
    const entryTime = v[1];
    calculateParkingTime(entryTime, '23:59', veh, parkTimeHash, vehTimeHash);
  })
  console.log('입차', vehTimeHash);
  console.log('누적', parkTimeHash);
}
/**
 * 시간을 분으로 바꾸는 함수
 * @param time
 */
const timeToMinutes = (time) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

/**
 * 주차 누적시간 계산
 * @param entryTime
 * @param time
 * @param veh
 * @param parkTimeHash
 * @param vehTimeHash
 */
const calculateParkingTime = (entryTime, time, veh, parkTimeHash, vehTimeHash) => {
  const duration = timeToMinutes(time) - entryTime;

  if (!parkTimeHash[veh]) {
    parkTimeHash[veh] = 0;
  }
  parkTimeHash[veh] += duration;
  delete vehTimeHash[veh];
}