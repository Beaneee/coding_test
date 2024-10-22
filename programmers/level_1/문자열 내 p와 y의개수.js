function solution(s){
  const arr = s.toLowerCase().split('');
  const pCount = arr.filter(v => v === 'p').length;
  const yCount = arr.filter(v => v === 'y').length;
  
  if(!pCount && !yCount) {
      return true
  }
  
  return pCount === yCount;
}