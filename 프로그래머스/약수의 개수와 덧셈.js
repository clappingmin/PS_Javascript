function countNumber(num) {
  let cnt = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i == 0)
      cnt += 1;
  }
  return cnt;
}

function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    // 약수 찾기
    let found = countNumber(i);

    if (found % 2 == 0)
      answer += i;
    else
      answer -= i;
  }

  return answer;
}