// https://www.acmicpc.net/problem/4344

const [n, ...arr] = require("fs")
  .readFileSync("./Input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  let avg = 0;
  let count = 0;
  let arrNumType = arr[i].split(" ").map((i) => parseInt(i, 10));
  let student = arrNumType.shift();
  for (let j = 0; j < student; j++) {
    sum += arrNumType[j];
  }

  avg = parseFloat(sum / student, 2);
  for (let i = 0; i < student; i++) {
    if (arrNumType[i] > avg) {
      count++;
    }
  }
  console.log(((count / student) * 100).toFixed(3) + "%");
  count = 0;
}
