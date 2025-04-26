const parseNumber = (s) => {
  let countZero = 0;
  let countOne = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      countZero++;
    } else {
      countOne++;
    }
  }

  return [countZero, countOne];
};

const generateBinary = (n) => {
  return n.toString(2);
};

function solution(s) {
  let str = s;
  let countZero = 0;
  let loopCount = 0;

  while (true) {
    if (str === '1') {
      break;
    }

    const [zero, newStrNumber] = parseNumber(str);
    countZero += zero;

    str = generateBinary(newStrNumber);

    loopCount += 1;
  }

  return [loopCount, countZero];
}
