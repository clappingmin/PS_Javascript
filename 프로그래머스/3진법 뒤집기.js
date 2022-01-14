function solution(n) {
  var answer = 0;

  let temp = [];

  while (n) {
    temp.push(parseInt(n) % 3);
    n = parseInt(n) / 3;
  }
  temp.pop();
  temp.reverse();

  let three = 1;
  for (let i = 0; i < temp.length; i++) {
    answer += temp[i] * three;
    three *= 3;
  }

  console.log(temp);

  return answer;
}