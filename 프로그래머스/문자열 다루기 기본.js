function solution(s) {

  if ((s.length == 4 || s.length == 6) && parseInt(s) == s) {
    return true;
  } else {
    return false;
  }
}