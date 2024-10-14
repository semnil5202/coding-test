const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

function solution(s) {
    return (s.length === 4 || s.length === 6) && !s.split('').some((char) => char.toUpperCase().charCodeAt() >= 65 && char.toUpperCase().charCodeAt() <= 90);
}