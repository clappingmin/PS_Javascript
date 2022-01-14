function solution(arr, divisor) {
  var answer = [];

  // 숫자 배열을 오름차순으로 정렬
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) % divisor == 0) {
      answer.push(arr[i]);
      console.log(arr[i]);
    }
  }

  if (answer.length == 0) {
    answer.push(-1);
  }

  return answer;
}