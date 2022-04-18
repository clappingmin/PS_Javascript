const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync('예제.txt').toString().split('\n');

let t = Number(input[0]);
let idx = 1;

while (t--) {
  const data = input[idx].split(' ');
  let start = Number(data[0]);
  let end = Number(data[1]);

  const dist = end - start; // 이동해야 할 거리
  let x = 0;
  let cnt = 1; // 작동횟수

  while (x < dist) {
    // 이동할 수 있는 거리(이동거리) < 이동해야 할 거리
    cnt++;
    x += Math.floor(cnt / 2);
  }

  console.log(cnt - 1);

  idx++;
}
/*
cnt = 2;
작동횟수 : 1
1번 작동에 갈 수 있는 거리 x = (0) + 1;

cnt = 3;
2번 작동에 갈 수 있는 거리 x =  (1) + 1;

cnt = 4;
3번 작동에 갈 수 있는 거리 x = (1 + 1) + 2;

*/
