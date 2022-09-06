const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {

  let weight = +line;
  let count = 0;

  while (true) {
    if (weight % 5 === 0) {
      count += (weight / 5);
      break;
    }
    else {
      if (weight < 0) {
        count = -1;
        break;
      }
      weight -= 3;
      count++;
    }
  }

  console.log(count);

  rl.close();
}).on("close", function() {
  process.exit();
});