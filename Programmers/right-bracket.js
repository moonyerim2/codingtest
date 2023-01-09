//전에 푼거
function solution(s) {
  const stack = [];

  for (let char of s) {
    if (char === '(') {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

//다시 풀었음
function solution(s) {
  if (s[0] === ")") return false;
  const sArr = s.split("");
  const stack = [];

  sArr.forEach((el) => {
    if (el === "(") {
      stack.push(el);
    } else if (el === ")") {
      stack.pop();
    }
  });

  return stack.length === 0;
}