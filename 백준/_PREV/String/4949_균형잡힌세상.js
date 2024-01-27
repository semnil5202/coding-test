const inputs = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
const sentences = inputs.map((el) => el.split(''));
sentences.pop();

sentences.forEach((sentence) => {
  const symmetries = [];
  let small = 0;
  let large = 0;
  sentence.forEach((el) => {
    if (el === '(') {
      symmetries.push(el);
      small++;
    }
    if (el === '[') {
      symmetries.push(el);
      large++;
    }
    if (el === ')') {
      small--;
      if (symmetries.length !== 0 && symmetries[symmetries.length - 1] === '(') {
        symmetries.pop();
      }
    }
    if (el === ']') {
      large--;
      if (symmetries.length !== 0 && symmetries[symmetries.length - 1] === '[' && el === ']') {
        symmetries.pop();
      }
    }
  });
  if (symmetries.length === 0 && small === 0 && large === 0) console.log('yes');
  else console.log('no');
});
