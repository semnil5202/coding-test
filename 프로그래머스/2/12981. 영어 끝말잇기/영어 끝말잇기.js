function solution(n, words) {
    const prevWords = [];
    let turn = null;
    
    for(let i = 0; i < words.length; i++) {
        turn = Math.ceil((i + 1) / n);
        
        if(words[i].length === 1 || prevWords.includes(words[i])) {
            return [(i % n) + 1, turn];
        }
        
        if(prevWords.length > 0) {
            const prevWord = prevWords[prevWords.length - 1];
            
            if(prevWord[prevWord.length - 1] !== words[i][0]) {
                return [(i % n) + 1, turn];            
            }
        }
        
        prevWords.push(words[i]);
    }
    
    return [0,0];
}