function solution(strings, n) {
    return strings.sort().sort((a,b) => {
        const strA = a[n].toUpperCase();
        const strB = b[n].toUpperCase();
        
        if(strA > strB) return 1;
        if(strA < strB) return -1;
        if(strA === strB) return 0;
    })
}