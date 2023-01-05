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
