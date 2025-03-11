function getCombinations(arr, selectNum) {
  // 종료 조건
  if (selectNum === 0) return [[]]; // 0개를 뽑으면 빈 배열
  if (arr.length === 0) return []; // 원소가 없으면 빈 결과 반환

  // first를 뽑는다.
  const [first, ...rest] = arr;

  // 1. first를 포함하는 조합
  const withFirst = getCombinations(rest, selectNum - 1).map(comb => [first, ...comb]);

  // 2. first를 포함하지 않는 조합
  const withoutFirst = getCombinations(rest, selectNum);

  return withFirst.concat(withoutFirst);
}

function solution(orders, course) {
  const result = [];

  for (const num of course) {
    // 메뉴에서 나올 코스요리를 조합함
    const menuList = [];
    for (const order of orders) {
      const orderArr = order.split('').sort();
      const list = getCombinations(orderArr, num);
      menuList.push(...list);
    }

    const courseHash = {};

    // 각각 나온 메뉴 구성을 count 한다.
    for (const menu of menuList) {
      const menuKey = menu.join('');
      courseHash[menuKey] = (courseHash[menuKey] || 0) + 1;
    }

    // 가장 많은 count를 가진 key를 result에 push한다.
    const max = Math.max(...Object.values(courseHash));

    if(max > 1) {
      for (const [key, value] of Object.entries(courseHash)) {
        if (value === max) {
          result.push(key);
        }
      }
    }
  }

  return result.sort();
}