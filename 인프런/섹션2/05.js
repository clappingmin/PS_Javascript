const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().split('\n');
const loopNumber = +input[0];
const scores = input[1].split(' ');
const result = [];

for (let i = 0; i < loopNumber; i++) {
  let rank = 1;
  for (let j = 0; j < loopNumber; j++) {
    if (i !== j && +scores[i] < +scores[j]) {
      rank++;
    }
  }
  result.push(rank);
}
console.log(result.join(' '));
