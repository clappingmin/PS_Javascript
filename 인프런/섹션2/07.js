const fs = require('fs');
const input = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let result = 0;
const n = input.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let flag = true;
    for (let k = 0; k < 4; k++) {
      const nx = i + dx[k];
      const ny = j + dy[k];

      if (!flag) break;

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < n &&
        ny < n &&
        input[i][j] <= input[nx][ny]
      ) {
        flag = false;
      }
    }
    if (flag) {
      result++;
    }
  }
}

console.log(result);
