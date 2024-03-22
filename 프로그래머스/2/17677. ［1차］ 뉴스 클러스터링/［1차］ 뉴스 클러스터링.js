function solution(s1, s2) {
    const str1 = s1.toLowerCase();
    const str2 = s2.toLowerCase();
    const arr1 = [];
    const arr2 = [];
    let inter = null;
    let union = null;
    
    const addTwoChar = (str, arr) => {
        for(let i = 0; i < str.length - 1; i++) {
            const twoChar = `${str[i]}${str[i+1]}`;
            
            if(/[^a-z]/g.test(twoChar)) continue;
            
            arr.push(twoChar);
        }
    }

    addTwoChar(str1, arr1);
    addTwoChar(str2, arr2);
    
    const set = new Set([...arr1, ...arr2]);
    
    set.forEach((str) => {
        const arr1length = arr1.filter((arrStr) => arrStr === str).length;
        const arr2length = arr2.filter((arrStr) => arrStr === str).length;
        
        inter += Math.min(arr1length, arr2length);
        union += Math.max(arr1length, arr2length);
    })
    
    return !union ? 65536 : Math.floor(inter / union * 65536);
}