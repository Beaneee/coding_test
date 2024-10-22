function solution(n, left, right) {
    const result = [];
    
    for (let i = left; i <= right; i++) {
        const r = Math.floor(i / n); //행
        const c = i % n; //열
        result.push(Math.max(r, c) + 1);
    }
    
    return result;
}