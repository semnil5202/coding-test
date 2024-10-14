function solution(numbers) {
    const answer = [];
    
    for(let i = 0; i < numbers.length; i++) {        
        for(let j = i + 1; j < numbers.length; j++) {
            if(j === numbers.length) break;
            
            if(answer.includes(numbers[i] + numbers[j])) continue;
            
            answer.push(numbers[i] + numbers[j]);
        }
    }
    
    return answer.sort((a,b) => a - b );
}