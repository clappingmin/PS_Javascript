const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
// const array = require('fs').readFileSync('예제.txt').toString().split('\n');

const stack = [];
const result = [];
let idx = 1;

let len = Number(array[0]);

while (len--) {
  switch (array[idx]) {
    case 'pop':
      result.push(stack.pop() || -1);
      break;

    case 'size':
      result.push(stack.length);
      break;

    case 'empty':
      result.push(stack[0] ? 0 : 1);
      break;

    case 'top':
      result.push(stack[stack.length - 1] || -1);
      break;

    default:
      stack.push(array[idx].split(' ')[1]);
      break;
  }
  idx++;
}

console.log(result.join('\n'));
