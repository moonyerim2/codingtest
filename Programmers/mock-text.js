//모의고사
const answers = [1, 3, 2, 4, 2];

function solution(answers) {
  var answer = [0, 0, 0];
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  answers.forEach((el, i) => {
    if (s1[i % s1.length] === el) answer[0]++;
    if (s2[i % s2.length] === el) answer[1]++;
    if (s3[i % s3.length] === el) answer[2]++;
  });

  const max = Math.max(...answer);
  
  return answer.reduce((result, el, i) => {
    if (el === max) result.push(i + 1);
    return result;
  }, []);
}

console.log(solution(answers));
