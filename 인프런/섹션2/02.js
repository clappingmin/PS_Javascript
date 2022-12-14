const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().split('\n');

const loopNumber = +input[0];
const students = input[1].split(' ');

let maxNum = -1;
let result = 0;

for (const height of students) {
  if (Number(height) > maxNum) {
    maxNum = Number(height);
    result += 1;
  }
}

console.log(result);
