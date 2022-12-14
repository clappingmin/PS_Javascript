// N(1<=N<=100)개의 정수를 입력받아,
// 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.(첫 번째 수는 무조건 출력한다)

const fs = require('fs');
const input = fs.readFileSync('예제.txt').toString().split('\n');
const t = Number(input[0]);
const numberArray = input[1].split(' ');
let result = numberArray[0] + ' ';
let i = 1;

while (i < t) {
  if (Number(numberArray[i]) > Number(numberArray[i - 1])) {
    result += `${numberArray[i]} `;
  }
  i++;
}

console.log(result);
