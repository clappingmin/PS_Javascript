function solution(sizes) {
  var answer = 0;

  let max_w = 0;
  let max_h = 0;

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);

    if (max_h < sizes[i][0])
      max_h = sizes[i][0];

    if (max_w < sizes[i][1])
      max_w = sizes[i][1];
  }

  answer = max_h * max_w;

  return answer;
}