function solution(people, limit) {
    people.sort((a, b) => (a - b));
    
    let maxIdx = 0;
    let minIdx = people.length - 1;
    let count = 0;
    while(maxIdx <= minIdx) {
        const max = people[maxIdx];
        const min = people[minIdx];
        
        // 가장 무거운 사람과 가장 가벼운 사람을 함께 태워 보트를 사용하는 경우
        if(max + min <= limit) {
            maxIdx++; //조건이 맞으면 두명을 태워서 보낼 수 있으니까
        }
        // 가장 무거운 사람만 태우는 경우
        minIdx--;
        // 구명보트 사용 횟수 증가   
        count++;
    }
    
    return count;
}
