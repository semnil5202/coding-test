// https://www.acmicpc.net/problem/1193

let input = Number(require("fs").readFileSync("./INPUT.txt").toString().trim());

let groupNum;

for (groupNum = 0; input > 0; groupNum++) {
  input -= groupNum;
}

groupNum--;

groupNum % 2 === 0
  ? console.log(`${groupNum + input}/${1 + -input}`)
  : console.log(`${1 + -input}/${groupNum + input}`);
