function solution(S) {
    let stack = [];
    let chars = S.split('');
    let answer = 0;
    
    const init = () => {
        const first = chars.shift();
        chars.push(first);
        stack = [];
    }
    
    for(let i = 0; i < S.length; i++) {
        if(chars[0] === ']' || chars[0] === '}' || chars[0] === ')') {
            init();
            continue;
        }
        
        for(let j = 0; j < chars.length; j++) {
            if(chars[j] === ']' && stack.includes('[')) {
                stack.pop();
                continue;
            }
            if(chars[j] === '}' && stack.includes('{')) {
                stack.pop();
                continue;
            }
            if(chars[j] === ')' && stack.includes('(')) {
                stack.pop();
                continue;
            }
                
            stack.push(chars[j]);
        }
        
        if(stack.length === 0) answer += 1;
        
        init();
    }
    
    return answer;
}