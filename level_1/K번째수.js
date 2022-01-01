function solution(array, commands) {
  var answer = [];
  
  for (let i = 0; i < commands.length; i++) {
      let newArr = array.slice(commands[i][0] -1, commands[i][1]);
      newArr.sort(function(a,b) {
          return a - b;
      });
      answer.push(newArr[commands[i][2] - 1]);
  }    
  return answer;
}