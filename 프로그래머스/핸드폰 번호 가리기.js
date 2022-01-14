function solution(phone_number) {
  var answer = '';
  
  let num = phone_number.length-4;
  
  for(let i = 0; i<num; i++){
      answer += "*";
  }
  for (let i = num; i< phone_number.length;i++){
      answer += phone_number[i];
  }
  
  return answer;
}