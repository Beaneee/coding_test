function solution(enroll, referral, seller, amount) {
  const parent = {};
  const profits = {};
  // 추천인 트리 또는 해시를 생성한다.
  for (const idx in enroll) {
    parent[enroll[idx]] = referral[idx];
  }

  // seller를 순회하여
  seller.forEach((name, idx) => {
    let money = amount[idx] * 100;
    let person = name;

    while (person !== '-' && money > 0 ) {
      const giveMoney = Math.floor(money * 0.1); // 주는 몫
      const keepMoney = money - giveMoney;// 본인이 갖는 몫

      profits[person] = (profits[person] || 0) + keepMoney;
      person = parent[person];
      money = giveMoney;
    }
  })

  return enroll.map(name => profits[name]);
}