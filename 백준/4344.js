const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString() //.split('\n');
const input = fs.readFileSync('예제.txt').toString().split('\n');

let w = input[0];
let i = 0;

while (w--) {
  i++;
  let studentNum = input[i].toString().split(' ');
  let avg = 0;

  let num = studentNum[0];

  for (let j=1;j<=num;j++)
  {
    avg += Number(studentNum[j]);
  }
  avg = Math.floor(avg/studentNum[0]);

  studentNum.splice(0,1);

  let good = studentNum.filter(score => Number(score)> avg).length;
  let res = (good/num*100).toFixed(3);

  console.log(res+"%");
}