// https://www.acmicpc.net/problem/1157

const input = require("fs").readFileSync("./INPUT.txt").toString().trim();
const upperInput = input.toUpperCase();
const uniqueInput = [...new Set(upperInput)];
const countArr = new Array(uniqueInput.length).fill(0);
const upperInputArr = upperInput.split("");
let cnt = 0;

for (let i = 0; i < uniqueInput.length; i++) {
  for (let j = 0; j < upperInputArr.length; j++) {
    if (uniqueInput[i] === upperInputArr[j]) {
      countArr[i] += 1;
    }
  }
}

countArr.forEach((i) => {
  if (Math.max(...countArr) === i) {
    cnt++;
    return cnt;
  }
});

cnt === 1
  ? console.log(uniqueInput[countArr.indexOf(Math.max(...countArr))])
  : console.log("?");
