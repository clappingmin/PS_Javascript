const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('예제.txt').toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

const num1 = b % 10;
const num2 = Math.floor((b % 100) / 10);
const num3 = Math.floor(b / 100);

console.log(a * num1);
console.log(a * num2);
console.log(a * num3);
console.log(a * b);