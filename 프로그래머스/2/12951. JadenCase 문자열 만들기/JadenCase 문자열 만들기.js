function solution(s) {
    return s.split(' ').map((str) => str.split('').map((char, idx) => {
        if(idx === 0) return char.toUpperCase();
        return char.toLowerCase();
    }).join('')).join(' ')
}