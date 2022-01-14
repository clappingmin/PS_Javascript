function solution(lottos, win_nums) {
  var answer = [];

  let count_num = 0;
  let count_zero = 0;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] == 0) {
      count_zero += 1;
      continue;
    }
    if (win_nums.includes(lottos[i])) {
      count_num += 1;
      console.log("맞았다!!!" + lottos[i]);
    }
  }

  let best_res = 7 - (count_zero + count_num);
  let worst_res = 7 - count_num;

  if (best_res > 6)
    best_res = 6;
  if (worst_res > 6)
    worst_res = 6;

  answer.push(best_res, worst_res);

  return answer;
}