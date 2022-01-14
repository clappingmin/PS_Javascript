function solution(x, n) {
  var answer = [];
  let temp = 0;

  for (let i = 0; i < n; i++) {
    temp += x;
    answer.push(temp);
  }

  return answer;
}