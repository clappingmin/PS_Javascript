function solution(N, stages) {
  let answer = [];

  for (let i = 1; i <= N; i++) {

    //Array.filter() : 조건을 만족하는 원소만 추출
    let not_clear = stages.filter(n => n === i).length
    let reached = stages.filter(n => n >= i).length

    console.log(not_clear / reached);

    //answer = [[스테이지, 실패율]]
    answer.push([i, not_clear / reached])

  }

  //answer의 2번째 원소기준으로 내림차순으로 정렬
  answer = answer.sort((a, b) => b[1] - a[1])

  //Array.map() : 배열을 조건에 맞게 변환
  return answer.map(x => x[0]);

  // .map()에 대해서 알기
  // .filter()에 대해서 알기

}