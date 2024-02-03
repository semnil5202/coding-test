function solution(food) {
    const foodCounts = food.map((food, idx) => {
        if(idx === 0) return 1;
        
        return Math.floor(food / 2);
    })
    
    const answer = [0];
    
    for(let i = foodCounts.length - 1; i>0; i--) {
        for(let j = 0; j<foodCounts[i]; j++) {
            answer.unshift(i);
            answer.push(i);
        }
    }
    
    return answer.join('');
}