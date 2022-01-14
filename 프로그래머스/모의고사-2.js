function solution(answers) {

  let s1 = [1, 2, 3, 4, 5];
  let s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let cnt = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {

    if (answers[i] == s1[i % 5])
      cnt[0] += 1;
    if (answers[i] == s2[i % 8])
      cnt[1] += 1;
    if (answers[i] == s3[i % 10])
      cnt[2] += 1;
  }
  let m = Math.max(cnt[0], cnt[1], cnt[2]);
  let res = [];

  for (let i = 0; i < 3; i++) {
    if (m == cnt[i])
      res.push(i + 1);
  }
  return res;
}