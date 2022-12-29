const s = "one4seveneight";

function solution(s) {
  var answer = 0;
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let word = "";

  answer = s.split("").reduce((answer, el) => {
    word += el;

    //숫자이면
    if (`${Number(el)}` !== "NaN") {
      //answer에 바로 붙여주기
      //word는 비우기 (새로 시작)
      word = "";
      return answer + el;
    }

    //word가 위에 정의한 단어에 있다면
    if (numbers.hasOwnProperty(word)) {
      //찾은 숫자를 answer에 붙여주고
      //word는 비우기 (새로 시작)
      const num = numbers[word];
      word = "";
      return answer + num;
    }

    //숫자도 아니도 단어도 완성되지 않으면 그냥 넘어감
    return answer;
  }, "");

  return Number(answer);
}

console.log(solution(s));
