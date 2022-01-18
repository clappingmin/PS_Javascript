function solution(progresses, speeds) {
  var answer = [];
  let day = [];

  for (let i = 0; i < progresses.length; i++) {
    let cnt_day = parseInt((100 - progresses[i]) / speeds[i]);

    if (parseInt(100 - progresses[i]) % speeds[i] != 0)
      cnt_day += 1;

    day.push(cnt_day);

  }

  console.log("남은 일수들 : " + day)

  while (day.length > 0) {
    let i = 0;
    let temp = 1;

    for (let j = i + 1; day[j] <= day[i]; j++) {
      temp += 1;
    }
    answer.push(temp);
    day.splice(0, temp);

  }


  return answer;
}