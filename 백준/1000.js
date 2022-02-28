const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('예제.txt').toString().split(' ');

console.log(Number(input[0]) + Number(input[1]));
