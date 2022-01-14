function solution(x) {
  var answer = true;

  let n = x;
  let x_sum = 0;
  while (n) {
    x_sum += parseInt(n) % 10;
    n = parseInt(n) / 10;
  }

  if (parseInt(x) % x_sum == 0)
    return true;
  else
    return false;
}