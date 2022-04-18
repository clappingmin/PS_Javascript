const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
// const input = fs.readFileSync('예제.txt').toString().split('\n');

let cnt = input[0];
let i = 1;

class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
  is_Empty() {
    return this._arr.length === 0 ? true : false;
  }
}

while (cnt--) {
  const array = input[i];
  const stack = new Stack();

  for (let j = 0; j < array.length; j++) {
    if (array[j] === ')') {
      if (stack.is_Empty()) {
        stack.push(array[j]);
        break;
      } else if (stack.peek() === '(') {
        stack.pop();
      } else if (stack.peek() === ')') stack.push(array[j]);
    } else if (array[j] === '(') {
      if (stack.peek() === ')') {
        stack.push(array[j]);
        break;
      } else {
        stack.push(array[j]);
      }
    }
  }
  if (stack.is_Empty()) console.log('YES');
  else console.log('NO');

  i++;
}
