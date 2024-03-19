function solution(N,A,B)
{
    let left = A;
    let right = B;
    let answer = 0;
    
    while(left !== right) {
        left = Math.ceil(left / 2);
        right = Math.ceil(right / 2);
        
        answer += 1;
    }
    
    return answer;
}