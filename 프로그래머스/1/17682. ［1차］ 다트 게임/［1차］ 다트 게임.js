function solution(dartResult) {
    const numberSet = '10,9,8,7,6,5,4,3,2,1,0'.split(',');
    const answer = [];
    let passIdx = null;
    
    dartResult.split('').forEach((item, idx) => {
        if(passIdx === idx) return;
        
        if(numberSet.includes(item)) {            
            if(dartResult[idx + 1] === '0') {
              passIdx = idx + 1;
              answer.push(10);
            } 
            else {
              passIdx = null;
              answer.push(Number(item));
            } 
        }
        
        if(item === 'D') {
            answer[answer.length - 1] = Math.pow(answer[answer.length - 1], 2);
        }
        
        if(item === 'T') {
            answer[answer.length - 1] = Math.pow(answer[answer.length - 1], 3);
        }
        
        if(item === '#') {
            answer[answer.length - 1] = answer[answer.length - 1] * (-1);
        }
        
        if(item === '*') {
            answer[answer.length - 1] = answer[answer.length - 1] * 2;
            answer[answer.length - 2] = answer[answer.length - 2] * 2;
        }
    })
    
    return answer.reduce((acc, cur) => acc+cur,0);
}