function solution(price, money, count) {
  var answer = -1;

  let want = 0;

  for (let i = 1; i <= count; i++) {
    want += (price * i);
  }

  answer = want - money;

  if (answer < 0)
    answer = 0;

  return answer;
}