const a = 3;
const b = 2;
const n = 20;

//처음에 b를 고려하지 않음
function solution(a, b, n) {
  var answer = 0;
  let cola = n;
  let rest = 0;

  while (true) {
    if (cola < a && rest === 0) return answer;

    rest += cola % a;
    cola = Math.floor(cola / a) * b;
    answer += cola;

    cola += rest;
    rest = 0;
  }
}

console.log(solution(a, b, n));
