const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('예제.txt').toString().split('\n');

let t = input[0];
let idx = 1;

while (t--) {
  const ex = input[idx].split(' ');
  const h = Number(ex[0]);
  const w = Number(ex[1]);
  const n = Number(ex[2]);

  const first = n % h === 0 ? h : n % h;
  const second = Math.ceil(n / h);

  if (second < 10) console.log(first + '0' + second);
  else console.log(first + '' + second);

  idx++;
}
