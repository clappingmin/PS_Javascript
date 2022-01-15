function solution(n, arr1, arr2) {
  var answer = [];

  // 지도의 행
  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i] % 2 == 1 || arr2[i] % 2 == 1)
        temp += "#";
      else
        temp += " ";

      arr1[i] = parseInt(arr1[i] / 2);
      arr2[i] = parseInt(arr2[i] / 2);
    }
    temp = temp.split('').reverse().join("");
    answer.push(temp);
    temp = [];
  }
  return answer;
}