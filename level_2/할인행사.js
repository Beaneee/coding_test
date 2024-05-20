function solution(want, number, discount) {
  let startInx = 0;
  let arr = [];
  for(let i = startInx; i < discount.length; i++) {
    arr.push(discount[i]);
  }

  want.forEach((item, idx) => {
    const count = arr.filter((v) => v === item).length;
    
    if(count !== number[idx]) {
      return
    }

    if(!count) {
      return
    }
    console.log(count, item, number[idx]);
  })
}