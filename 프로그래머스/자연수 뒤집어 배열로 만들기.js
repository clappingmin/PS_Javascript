function solution(n) {
  var answer = [];

  while (n) {
    let num = parseInt(n) % 10;
    answer.push(num);

    n = parseInt(n) / 10;
  }
  answer.pop();

  return answer;
}