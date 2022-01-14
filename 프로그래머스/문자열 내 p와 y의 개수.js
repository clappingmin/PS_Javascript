function solution(s) {

  let p_count = 0;
  let y_count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == 'P' || s[i] == 'p')
      p_count++;
    else if (s[i] == 'Y' || s[i] == 'y')
      y_count++;
  }

  if (p_count == y_count)
    return true;
  else
    return false;
}