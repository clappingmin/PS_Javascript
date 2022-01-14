function solution(s) {
  let numbers = {
    "zero": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
  };
  var answer = 0;

  var res = "";
  let temp = "";

  for (let i = 0; i < s.length; i++) {
    // 숫자일 경우
    if (!isNaN(parseInt(s[i]))) {
      res += s[i];
      continue;
    }
    // 문자일 경우
    else {
      temp += s[i];
      if (temp in numbers) {
        res += numbers[temp];
        temp = "";
      }

    }
  }
  console.log(temp);

  return Number(res);
}