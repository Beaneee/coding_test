let zeroCount = 0;
let recursiveCount = 0;

function solution(s) {
    //0을 제거한다.
    //0제거 후 길이를 이진으로 변환한다
    //이진 변환결과가 1이면 종료한다.
    //retun [재귀 횟수, 0제거 횟수]
    recursiveCount += 1;
    let arr = s.split(''); //배열로 만들고
    
    let conversionArr = [];
    let zeroArr = [];
    
    //0을 제거
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === '0') {
            zeroArr.push(arr[i])
        } else {
            conversionArr.push(arr[i])
        }
    }
    
    zeroCount += zeroArr.length;
    
    //이진으로 변환
    let str = conversionArr.length.toString(2);
    let count = 0;
    //1이 아니면 재귀반복
    if(str !== '1') { //종료 조건
        solution(str);
    }
    return [recursiveCount, zeroCount];
}