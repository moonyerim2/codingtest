//약수의 개수와 덧셈

const input1 = {
  left: 13,
  right: 17,
  result: 43,
};

const input2 = {
  left: 24,
  right: 27,
  result: 52,
};

const { left, right, result } = input1;

function solution(left, right) {
  const factorCount = [];

  for (let i = left; i <= right; i++) {
    const factors = [];
    const sqrt = Math.sqrt(i);

    for (let j = 1; j <= sqrt; j++) {
      if (i % j === 0) {
        factors.push(j);
        if (Math.floor(i / j) === j) continue;
        factors.push(i / j);
      }
    }
    factorCount.push([i, factors.length]);
  }

  return factorCount.reduce((answer, [num, count]) => {
    if (count % 2 === 0) {
      return answer + num;
    }
    return answer - num;
  }, 0);
}

const answer = solution(left, right);
console.log(answer, answer == result);
