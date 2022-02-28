const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString() //.split('\n');
// const input = fs.readFileSync('예제.txt') //.toString().split(' ');

let num = Number(input);

let sum;
let cnt = 0;

while (true) {

  cnt++;

  // console.log(cnt);
  sum = Math.floor(num / 10) + num % 10;
  num = (num % 10) * 10 + sum % 10;

  if (Number(input) === num) {
    console.log(cnt);
    return;
  }

}