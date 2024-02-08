function solution(s, n) {
    return s.split('').map((str) => {
        const code = str.charCodeAt();
        
        if(97 <= code && code <= 122){
            return String.fromCharCode((code + n - 97) % 26 + 97);
        }

        if(65 <= code && code <= 90){
            return String.fromCharCode((code + n - 65) % 26 + 65);
        }
        
        return ' ';
    }).join('')
}