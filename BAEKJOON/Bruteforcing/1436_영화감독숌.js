let series = Number(require('fs').readFileSync('./INPUT.txt').toString().trim());
let answer = 0;

while (series !== 0) {
  answer++;
  if (answer.toString().includes('666')) series--;
}

console.log(answer);
