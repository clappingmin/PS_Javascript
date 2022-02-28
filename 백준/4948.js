const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('예제.txt').toString().split('\n');

let idx = 0;

function isPrime(a) {
  for (let i = 2; i <= Math.sqrt(a); i++) {
    if (a % i === 0) return false;
  }
  return true;
}

while (input[idx]) {
  const num = Number(input[idx]);
  let cnt = 0;

  if (num === 0) break;

  for (let i = num + 1; i <= 2 * num; i++) {
    if (isPrime(i)) {
      cnt += 1;
    }
  }
  console.log(cnt);
  idx++;
}
