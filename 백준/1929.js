const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('예제.txt').toString().split(' ');

const start = Number(input[0]);
const end = Number(input[1]);

let isPrime = Array(end + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

function findPrime() {
  for (let i = 2; i <= end; i++) {
    if (isPrime[i]) {
      for (let j = i + i; j <= end; j = j + i) {
        isPrime[j] = false;
      }
    }
  }
}

findPrime();
let cnt = 0;
for (let i = start; i <= end; i++) {
  if (isPrime[i]) console.log(i);
}
