function solution(dartResult) {
  var answer = 0;
  const splitedDartResult = splitDartResult(dartResult);
  const star = [1, 1, 1];

  answer = splitedDartResult.reduce((countArr, result, i) => {
    const calcResult = result.split("").reduce((calcResult, token, j) => {
      if (calcResult === 1 && token === '0') return 10;
      if (j === 0) return Number(token);

      if (token === "S") {
        return calcResult ** 1;
      }
      if (token === "D") {
        return calcResult ** 2;
      }
      if (token === "T") {
        return calcResult ** 3;
      }
      if (token === "*") {
        star[i - 1] *= 2;
        return calcResult * 2;
      }
      if (token === "#") {
        return calcResult * -1;
      }
    }, 0);

    return [...countArr, calcResult];
  }, []);

  return answer.reduce((a, b, i) => a + b * star[i], 0);
}

function splitDartResult(dartResult) {
  const splitedDartResult = [];
  let turn = "";

  dartResult.split("").forEach((token, i) => {
    if (token === '0' && turn === '1') {
      turn += token;
      return;
    }

    if (i === 0) {
      turn += token;
      return;
    }

    //숫자가 나오면 turn 푸시하고 비우고 숫자넣기
    if (!isNaN(Number(token))) {
      splitedDartResult.push(turn);
      turn = "";
      turn += token;
      return;
    } else {
      turn += token;
      return;
    }
  });

  splitedDartResult.push(turn);
  return splitedDartResult;
}

console.log(solution("1D2S#10S"));
// console.log(solution("10S"));
