const getPitaDistance = (x1, x2, y1, y2) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

function solution(direction, radius, X, Y) {
  let answer = 0;

  for (let i = 0; i < X.length; i++) {
    if (radius < getPitaDistance(0, X[i], 0, Y[i])) continue;

    if (direction === 'U') {
      if (Y[i] < 0) continue;
      const x = Math.abs(x[1]);

      if (Y[i] < x) continue;
    } else if (direction === 'R') {
      if (X[i] < 0) continue;
      const y = Math.abs(Y[i]);

      if (X[i] < y) continue;
    } else if (direction === 'D') {
      if (Y[i] > 0) continue;
      const x = Math.abs(X[i]);
      const y = Math.abs(Y[i]);

      if (y < x) continue;
    } else {
      if (X[i] > 0) continue;
      const x = Math.abs(X[i]);
      const y = Math.abs(Y[i]);

      if (x < y) continue;
    }
    answer += 1;
  }
}

const getPhone = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(33);
    }, 1000);
  });

async function getPhoneNumber() {
  const countries = Object.values({ kr: 'KOREA', us: 'US' });
  const answer = {};

  const temp = countries.map((country) => getPhone());

  const phones = await Promise.all(temp);

  phones.forEach((phone, idx) => {
    answer[countries[idx]] = phone;
  });

  for (let i = 0; i < countries.length; i++) {
    const phone = await getPhone();
    answer[countries[i]] = phone;
  }

  // console.log(answer);
}

getPhoneNumber();
