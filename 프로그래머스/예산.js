function solution(d, budget) {
  let cnt = 0;

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i];
      cnt += 1;
    } else
      break;
  }

  return cnt;
}