// const array = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const array = require('fs').readFileSync('예제.txt').toString().split('\n');

const queue = [];
const result = [];
let idx = 1;

let len = Number(array[0]);

while (len--) {
  switch (array[idx]) {
    case 'pop':
      result.push(queue[0] ? queue[0] : -1);
      queue.shift();
      break;

    case 'size':
      result.push(queue.length);
      break;

    case 'empty':
      result.push(queue.length === 0 ? 1 : 0);
      break;

    case 'front':
      result.push(queue[0] ? queue[0] : -1);
      break;

    case 'back':
      result.push(queue[queue.length - 1] ? queue[queue.length - 1] : -1);
      break;

    default:
      queue.push(array[idx].split(' ')[1]);
      break;
  }
  idx++;
}

console.log(result.join('\n'));
