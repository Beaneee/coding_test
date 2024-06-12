function solution(phone_book) {
  //비슷한 문자열로 정렬을 하고, 전화번호는 숫자로 되어있으니까~
  phone_book.sort();
  // index + 1를 startsWith으로 판별하자., 비슷한 숫자로 정렬하니까,
  // index + 1를 건너뛴 건 당연히 맞지 않다.
  for(let i = 0; i < phone_book.length; i++) {
    const prefix = phone_book[i];
    const comparePrefix = phone_book[i + 1]

    //더이상 비교할 게 없다는 뜻
    if(!comparePrefix) return true;

    if(comparePrefix.startsWith(prefix)) return false
  }

  return true
}