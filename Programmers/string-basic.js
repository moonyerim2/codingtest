//문자열 다루기 기본

const s_1 = "a234";
const s_2 = "1234";
const s_3 = "060e";

function solution(s) {
  const sArr = s.split("");

  if (s.length !== 4 && s.length !== 6) return false;

  for (el of sArr) {
    if (Number(el) === 0) continue;
    if (!Number(el)) return false;
  }

  return true;
}

console.log(solution(s_1));
console.log(solution(s_2));
console.log(solution(s_3));
