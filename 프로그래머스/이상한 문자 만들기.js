function solution(s) {
  var answer = '';
  let idx = 0;

  for (let i = 0; i < s.length; i++) {

    if (s[i] == ' ') {
      idx = 0;
      answer += ' ';
      continue;
    }
    if (idx % 2 == 0) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
    idx++;
  }

  return answer;
}