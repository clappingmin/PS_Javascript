const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
// const input = fs.readFileSync('예제.txt').toString().split(' ');

let sugar = Number(input[0]);

// console.log(sugar);

let three = 0;
let five = 0;

while (parseInt(sugar % 5) != 0 && sugar >= 0) {
  sugar -= 3;
  three++;
}
if (sugar < 0) {
  console.log(-1);
} else {
  five = sugar / 5;
  console.log(five + three);
}
