let input = require("fs")
  .readFileSync("./INPUT.txt")
  .toString()
  .trim()
  .split("\n");

function countClap(num) {
  let clapNumber = 0;
  while (num > 2) {
    let idx = num;
    while (idx > 0) {
      if (idx % 10 === 3 || idx % 10 === 6 || idx % 10 === 9) {
        clapNumber++;
      }
      idx = parseInt(idx / 10, 10);
    }
    num--;
  }
  return clapNumber;
}

console.log(countClap(Number(input)));
