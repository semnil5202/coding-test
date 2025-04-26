function solution(n) {
  let count = 0;

  const maxI = Math.floor((1 + Math.sqrt(1 + 8 * n)) / 2);

  for (let i = 1; i <= maxI; i++) {
    const sum = (i * (i - 1)) / 2;
    const remain = n - sum;
      
    if (remain > 0 && remain % i === 0) {
      count++;
    }
  }

  return count;
}
