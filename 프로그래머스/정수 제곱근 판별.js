function solution(n) {
  var answer = 0;

  let num = Math.sqrt(n);

  if (num % 1 == 0)
    return (num + 1) * (num + 1)
  else
    return -1;

  return answer;
}