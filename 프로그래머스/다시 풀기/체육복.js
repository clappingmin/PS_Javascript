// 1
function solution(n, lost, reserve) {

  let uniform = new Array(n + 1).fill(1);

  for (let i = 1; i <= n; i++) {
    if (lost.includes(i)) {
      uniform[i] -= 1;
    }
    if (reserve.includes(i)) {
      uniform[i] += 1;
    }
  }
  let answer = uniform.filter(x => x >= 1).length - 1; // 0번 idx는 count 빼야한다.
  reserve = [];
  lost = [];

  // 여벌 옷을 잃어버린 경우도 있어서 reserve, lost 배열에 인덱스를 다시 넣어준다.
  for (let i = 1; i <= n; i++) {
    if (uniform[i] == 2)
      reserve.push(i);
  }

  for (let i = 1; i <= n; i++) {
    if (uniform[i] == 0)
      lost.push(i);
  }

  for (let i = 0; i < lost.length; i++) {
    console.log(i)
    if (reserve.includes(lost[i] - 1)) {
      reserve = reserve.filter(x => x !== lost[i] - 1)
      answer += 1;
    } else if (reserve.includes(lost[i] + 1)) {
      reserve = reserve.filter(x => x !== lost[i] + 1)
      answer += 1;
    }
  }

  return answer;
}

// 2
function solution(n, lost, reserve) {
  var answer = 0;

  let uniform = new Array(n).fill(1);

  for (let i = 0; i < reserve.length; i++)
    uniform[reserve[i] - 1] += 1;

  for (let i = 0; i < lost.length; i++)
    uniform[lost[i] - 1] -= 1;

  for (let i = 0; i < n; i++) {
    if (uniform[i] === 0) {
      if (uniform[i - 1] === 2) {
        uniform[i] += 1;
        uniform[i - 1] -= 1;
      } else if (uniform[i + 1] === 2) {
        uniform[i] += 1;
        uniform[i + 1] -= 1;
      }
    }
  }


  for (let i = 0; i < uniform.length; i++) {
    if (uniform[i] >= 1)
      answer += 1;

    console.log(uniform[i]);
  }

  return answer;
}