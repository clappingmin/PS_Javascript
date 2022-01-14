function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    if (a[n] > b[n]) return 1; // b,a
    if (a[n] < b[n]) return -1; //a,b
    if (a[n] === b[n]) {
      if (a > b) return 1; //b,a
      if (a < b) return -1; //a,b
      return 0;
    }
  });

  return answer;
}
// 자바스크립트에서 sort()
/* 
  양수 : b가 a보다 앞에 
  음수 : a가 b보다 앞에
  0 : 변함 없음
*/