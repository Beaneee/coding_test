function solution(id_list, report, k) {
  const reportUserHash = {}; // 유저별로 신고 당한 횟수 정보를 담은 hash

  // hash 생성
  for (const rpt of report) {
    const rptSplit = rpt.split(' ');
    const reporter = rptSplit[0]; // 신고자
    const reportedUser = rptSplit[1]; // 신고를 당한 사람

    if(!reportUserHash[reportedUser]) {
      reportUserHash[reportedUser] = new Set();
    }

    reportUserHash[reportedUser].add(reporter);
  }

  const reportHash = {}; // 정지를 당한 사람을 신고한 횟수를 저장한 hash

  // k번 신고당한 유저
  for (const [user, count] of Object.entries(reportUserHash)) {
    if(count.size >= k) {
      reportUserHash[user].forEach(reporter => {
        reportHash[reporter] = (reportHash[reporter] || 0) + 1;
      })
    }
  }

  const result = [];
  // id_list를 순회하면서 reportHash에 담긴 value를 result에 push
  for (const userId of id_list) {
    if(!reportHash[userId]) {
      result.push(0);
    } else {
      result.push(reportHash[userId]);
    }
  }

  return result;
}