function solution(phone_book) {
  for(let i = 0; i < phone_book.length; i++) {
    const prefix = phone_book[i];

    for(let j = 0; j < phone_book.length; j++) {
      if(i !== j) {
        const comparePrefix = phone_book[j].slice(0, prefix.length);
        if(comparePrefix === prefix) return false
      }
    }
  }
  return true
}