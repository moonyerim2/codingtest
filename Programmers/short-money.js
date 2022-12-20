//부족한 금액 계산하기

function solution(price, money, count) {
  var answer = -1;
  let sumPrice = 0;

  for (let i = 0; i <= count; i++) {
    sumPrice += price * i;
  }

  answer = sumPrice - money;
  return answer <= 0 ? 0 : answer;
}