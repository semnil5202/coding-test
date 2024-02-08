function solution(s) {
    const prevChars = [];
    const answer = s.split('').map((char, idx) => {
        prevChars.unshift(char);
        
        return prevChars.indexOf(char, 1);
    })
    
    return answer;
}