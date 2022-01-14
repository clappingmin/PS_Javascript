function solution(arr) {
  var answer = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i])
      continue;
    else
      answer.push(arr[i]);
  }

  console.log('Hello Javascript')

  return answer;
}

// filter()에 대해서 찾아보기