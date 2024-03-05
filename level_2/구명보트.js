function solution(people, limit) {
    
    let count = 0;
    const initRecursiveCount = people.length;
    let copyArr = people.sort((a, b) => b - a);
    
    
    for(i = 0; i < initRecursiveCount; i++) {
        const weight = copyArr[0]; 
        const differ = limit - weight;
        
        if(weight > differ) {
            count++;
            people.shift();
        } else {
            
            if(copyArr.length > 1) {
                count += (copyArr.length / 2)
            }
            
            if(copyArr.length === 1) {
                count++
            }
            copyArr = [];
        }
    }
    
    return count;
}