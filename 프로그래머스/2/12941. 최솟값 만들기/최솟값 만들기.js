function solution(A,B){
    const sortedASC = A.sort((a,b) => a-b);
    const sortedDESC = B.sort((a,b) => b-a);
    let answer = 0;
    
    for (let i = 0; i < sortedASC.length; i++) {
        answer += sortedASC[i] * sortedDESC[i];
    }
    
    return answer;
}