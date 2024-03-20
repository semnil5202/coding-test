function solution(n, left, right) {
    const answer = [];
    
    for(let i = left; i <= n ** 2; i++) {
        if(i === right + 1) return answer;
        
        const row = Math.floor(i / n);
        const column = (i % n) + 1;        
        const adjust = row - (i % n) > 0 ? row - (i % n) : 0
        const count = column <= row ? column + adjust : column;
        
        answer.push(count);
    }
}