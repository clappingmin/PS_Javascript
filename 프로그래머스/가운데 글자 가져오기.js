function solution(s) {
  var answer = '';
  
  let num = s.length / 2

  // 짝수일 경우
  if (s.length % 2 == 0)
  {    
      answer += (s[num-1] + s[num]);
  }
  else // 홀수일 경우 
  {
      num -= 0.5;
      answer += s[num];
  }
  
  return answer;
}