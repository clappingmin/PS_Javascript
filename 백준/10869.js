const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('예제.txt').toString().split(' ');


const a = Number(input[0]);
const b = Number(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);