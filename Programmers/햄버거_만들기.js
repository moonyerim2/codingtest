// 시간초과

// function solution(ingredient) {
//   var count = 0;
//   const rule = "1231";

//   //1231 조합이 더 이상 나올수 없다면 햄버거를 만들 수 없다
//   while (ingredient.join("").indexOf(rule) !== -1) {
//     //1231 문자열을 발견하면
//     //answer += 1해서 햄버거 카운트
//     //사용한 재료 ingredient 배열에서 삭제

//     const hamburgerStartIndex = ingredient.join("").indexOf(rule);
//     count += 1;
//     ingredient.splice(hamburgerStartIndex, 4);
//   }

//   return count;
// }

function solution(ingredient) {
  var count = 0;
  const hamburgerStack = [];

  ingredient.forEach((el) => {
    hamburgerStack.push(el);

    if (hamburgerStack.length >= 4) {
      const hamburger = hamburgerStack.slice(-4).join("");
      if (hamburger === "1231") {
        hamburgerStack.pop();
        hamburgerStack.pop();
        hamburgerStack.pop();
        hamburgerStack.pop();

        count += 1;
      }
    }
  });

  return count;
}