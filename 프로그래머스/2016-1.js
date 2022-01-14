function solution(a, b) {
  var answer = '';

  var sum_date = -1;

  for (let i = 0; i < a - 1; i++) {
    sum_date += month[i];
  }
  sum_date += b

  answer = weeks[sum_date % 7];

  return answer;
}