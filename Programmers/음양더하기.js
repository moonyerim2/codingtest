function solution(absolutes, signs) {
  var answer = 123456789;

  answer = absolutes.reduce((result, number, i) => {
    if (signs[i]) {
      return (result += number);
    }
    return (result -= number);
  }, 0);

  return answer;
}
