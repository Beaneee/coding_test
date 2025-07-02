function solution(phone_number) {
  const lastIdx = phone_number.length;
  const number = phone_number.substr(lastIdx - 4);
  const strNumber = phone_number.substr(0, lastIdx - 4);

  return '*'.repeat(strNumber.length).concat(number);
}