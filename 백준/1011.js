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
  let x = 0; // 작동횟수
  let result = 1; // 결과

  while (x < dist) {
    // 작동횟수 < 이동해야 할 거리
    result++;
    x += Math.floor(result / 2);
  }

  console.log(result - 1);

  idx++;
}
/*
result = 2;
1번 작동에 갈 수 있는 거리 x = (0) + 1;

result = 3;
2번 작동에 갈 수 있는 거리 x =  (1) + 1;

result = 4;
3번 작동에 갈 수 있는 거리 x = (1 + 1) + 2;

*/
