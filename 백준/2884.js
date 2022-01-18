const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('예제.txt').toString().split(' ');

let hour = Number(input[0]);
let min = Number(input[1]);

min -= 45;

if (min < 0) {
  min += 60;
  hour -= 1;
}
if (hour === -1){
  hour = 23;
}

console.log(hour+" " +min);