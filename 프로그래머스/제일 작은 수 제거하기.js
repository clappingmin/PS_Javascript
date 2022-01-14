function solution(arr) {
  var answer = [];

  if (arr.length < 2)
    return [-1];

  const min_num = Math.min(...arr);

  let index = arr.indexOf(min_num);

  // min_num의 index값을 넣어서 1개 제거
  arr.splice(index, 1);

  console.log(arr)

  return arr
}

// splice 사용법 알기