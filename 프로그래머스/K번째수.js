function solution(array, commands) {
  var answer = [];

  // array.slice(begin,end);
  // begin은 포함, end 포함X

  for (let i = 0; i < commands.length; i++) {
    // 1. 배열 자르기
    let slice_array = array.slice(commands[i][0] - 1, commands[i][1])
    console.log(slice_array);

    // 2. 정렬하기
    slice_array.sort((a, b) => a - b);
    console.log(slice_array);

    // 3. 배열의 n번째
    answer.push(slice_array[commands[i][2] - 1]);
  }

  return answer;
}