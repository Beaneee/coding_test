function solution(record) {
  const result = [];

  // uuid : nickName hash 생성
  // record를 순회하면 최종적으로 바뀐 nickName이 저장된다.
  const hash = record.reduce((acc, part) => {
    const recordSplit = part.split(' ');
    const action = recordSplit[0];

    // 모두 바꿔주면 안되는거지,,,,
    if(action !== 'Leave') {
      const key = recordSplit[1];
      const value =recordSplit[2];
      acc[key] = value;
    }

    return acc
  }, {});

  for (const rec of record) {
    const recSplit = rec.split(' ');
    const uuid = recSplit[1];
    const action = recSplit[0];

    let message = '';
    // Enter, Leave, Change switch 처리
    switch (action) {
      case "Enter":
        message = `${hash[uuid]}님이 들어왔습니다.`;
        break;
      case "Leave":
        message = `${hash[uuid]}님이 나갔습니다.`;
        break;
      case "Change":
        break;
    }

    if(message) {
      result.push(message);
    }

  }
  return result;
}