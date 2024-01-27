const [n, input] = require('fs').readFileSync('./INPUT.txt').toString().trim().split('\n');
const inputs = input
  .split(' ')
  .map((el) => Number(el))
  .sort((a, b) => a - b);
const primes = eratosthenes(inputs[inputs.length - 1]);
let count = 0;

function eratosthenes(number) {
  const primes = new Array(number + 1).fill(true);
  const results = [];

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i * i <= number; i++) {
    if (primes[i]) {
      for (let j = i * i; j <= number; j += i) {
        primes[j] = false;
      }
    }
  }

  primes.forEach((el, idx) => {
    if (el === true) results.push(idx);
  });

  return results;
}

for (let i = 0; i < inputs.length; i++) {
  if (primes.includes(inputs[i])) count++;
}

console.log(count);
