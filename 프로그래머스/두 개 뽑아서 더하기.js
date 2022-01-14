function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  // [...new Set(answer)]
  let set = new Set(answer);
  answer = [...set];
  answer.sort((a, b) => a - b);



  return answer;
}