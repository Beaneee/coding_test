function solution(phone_book) {
  let prefix = '';
  phone_book.sort();

  for (phone of phone_book) {
    if (prefix && phone.startsWith(prefix)) {
      return false
    }

    prefix = phone;

  }

  return true;
}