const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().split('\n');

const loopNumber = +input[0];
const aResult = input[1].split(' ');
const bResult = input[2].split(' ');

let i = 0;
const result = [];

// 1: 가위, 2: 바위 3: 보
// 비겼을 경우 D

while (i < loopNumber) {
  console.log(aResult[i], bResult[i]);
  if (aResult[i] == bResult[i]) {
    result.push('D');
  } else if (aResult[i] == 1 && bResult[i] == 3) {
    result.push('A');
  } else if (aResult[i] == 2 && bResult[i] == 1) {
    result.push('A');
  } else if (aResult[i] == 3 && bResult[i] == 2) {
    result.push('A');
  } else result.push('B');

  i++;
}

result.map((number) => console.log(number));
