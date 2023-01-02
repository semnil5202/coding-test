// https://www.acmicpc.net/problem/4673

const answer = new Array(10000).fill().map((_, i) => i + 1);

function checkSelfNumber() {
  for (let i = 1; i < 10000; i++) {
    if (answer.includes(selfNumber(i))) answer.splice(answer.indexOf(selfNumber(i)), 1);
  }

  console.log(answer.join('\n'));
}

function selfNumber(number) {
  const results = [];
  let temp = 0;
  results.push(number);

  temp = Number.parseInt(number / 1000, 10);
  results.push(temp);
  number -= temp * 1000;

  temp = Number.parseInt(number / 100, 10);
  results.push(temp);
  number -= temp * 100;

  temp = Number.parseInt(number / 10, 10);
  results.push(temp);
  number -= temp * 10;

  temp = Number.parseInt(number / 1, 10);
  results.push(temp);
  number -= temp * 1;

  return results.reduce((pre, cur) => pre + cur, 0);
}

checkSelfNumber();
