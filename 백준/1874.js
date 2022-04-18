const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync('예제.txt').toString().split('\n');

class stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this.arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  top() {
    return this._arr[this._arr.length - 1];
  }
  is_Empty() {
    return this._arr.length === 0 ? true : false;
  }
}

let t = input[0];
let idx = 1;
let next = 1;
let result = [];

while (t--) {
  const num = input[idx];
  const stack = new stack();

  if (next > num) {
    result = 'NO';
    break;
  } else if (next === num) {
    result.push('-');
  } else {
    for (let i = next; i <= num; i++) {
      stack.push;
    }
  }
}
