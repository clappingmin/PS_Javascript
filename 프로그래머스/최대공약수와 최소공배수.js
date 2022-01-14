// 유클리드 호제법
function Gcd(num1, num2) {
  if (num2 == 0)
    return num1;

  return Gcd(num2, num1 % num2);
}

function solution(n, m) {
  var answer = [];

  let gcd = Gcd(n, m);

  answer.push(gcd, n * m / gcd);

  return answer;
}