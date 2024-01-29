function solution(n) {
    let answer = 1000000;
    
    for(let i = 0; i<n; i++) {
        if(n % i === 1 && answer > i) {
            answer = i
        }
    }
    
    return answer
}