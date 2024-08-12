function solution(s){
    const pNum = s.split('').filter((char) => char.toUpperCase() === 'P').length;
    const yNum = s.split('').filter((char) => char.toUpperCase() === 'Y').length;
    
    if(pNum === 0 && yNum === 0) return true;
    
    return pNum === yNum;
}