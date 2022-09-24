// https://www.acmicpc.net/problem/2775

const [n, ...a] = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

const arr = a.map((i) => parseInt(i, 10));

for (let i = 0; i < n; i++) {
  const floor = arr.shift();
  const member = arr.shift();
  const numberOfPeople = Array.from(Array(floor + 1), () =>
    Array(member + 1).fill(0)
  );

  for (let j = 0; j < member + 1; j++) {
    numberOfPeople[0][j] = j;
  }

  for (let i = 1; i < floor + 1; i++) {
    for (let j = 1; j < member + 1; j++) {
      numberOfPeople[i][j] =
        numberOfPeople[i - 1][j] + numberOfPeople[i][j - 1];
    }
  }
  console.log(numberOfPeople[floor][member]);
}
