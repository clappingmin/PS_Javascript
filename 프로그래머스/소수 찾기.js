function count_prime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0)
      return false;
  }
  return true;
}

function solution(n) {
  var answer = 0;

  if (n == 2)
    return 1;

  answer += 1;
  for (let i = 3; i <= n; i += 2) {
    if (count_prime(i))
      answer += 1;
  }

  return answer;
}