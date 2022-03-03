const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('예제.txt').toString().split('\n');

let t = Number(input[0]);
let idx = 1;

while (t--) {
  const data = input[idx].split(' ');

  const x1 = Number(data[0]);
  const y1 = Number(data[1]);
  const r1 = Number(data[2]);
  const x2 = Number(data[3]);
  const y2 = Number(data[4]);
  const r2 = Number(data[5]);

  d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));

  if (r1 + r2 < d) console.log(0);
  else if (Math.abs(r1 - r2) > d) console.log(0);
  else if (d == 0 && r1 == r2) console.log(-1);
  else if (d == r1 + r2) console.log(1);
  else if (d == Math.abs(r1 - r2)) console.log(1);
  else console.log(2);

  idx++;
}
