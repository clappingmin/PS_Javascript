const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString()//.split('\n');
const input = fs.readFileSync('예제.txt').toString() //.split(' ');

let a = input;
a = a.toUpperCase();
let check = {};
let max = 0;
let result = '';

if (a.length == 0) {
  console.log('?');
  return;
}
for (let i = 0; i < a.length; i++) {
  if (a[i] == ' ')
    continue;

  if (check.hasOwnProperty(a[i])) {
    check[`${a[i]}`] += 1;
  } else {
    check[`${a[i]}`] = 1;
  }
}

// console.log(check);

for (var n in check) {
  if (check[n] > max) {
    max = check[n];
    result = n;
  } else if (check[n] == max) {
    result += n;
  }
}

if (result.length > 1) {
  console.log('?')
} else {
  console.log(result);
}