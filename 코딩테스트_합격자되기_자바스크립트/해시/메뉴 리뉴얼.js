/**
 * 순열 - [1, 2, 3]에서 2개를 선택하는 경우 [[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
 * @param arr
 * @param selectNum
 * @returns {*[][]|*[]}
 */
function getPermutations(arr, selectNum) {
  if (selectNum === 0) return [[]]; // 0개를 뽑으면 빈 배열만 포함된 배열 반환

  const result = [];

  arr.forEach((fixed, index, origin) => {
    // 현재 선택한 요소(fixed)를 제외한 나머지 배열(rest)
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

    // 나머지 원소들로 만들 수 있는 순열을 재귀적으로 구함
    const perms = getPermutations(rest, selectNum - 1);

    // 현재 선택한 요소(fixed)를 앞에 붙여서 최종 순열 생성
    const attached = perms.map((perm) => [fixed, ...perm]);

    result.push(...attached);
  });

  return result;
}

/**
 * 조합 - [1, 2, 3]에서 2개를 뽑는 조합은 [[1, 2], [1, 3], [2, 3]]
 * @param arr
 * @param selectNum
 * @returns {*[][]|*[]}
 */
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