//JadenCase 문자열 만들기

const s = "3people  unFollowed me ";

function solution(s) {
  const answer = s.split(" ").reduce((answer, word) => {
    if (word === "") return answer + " ";

    const first = word[0];
    const rest = word.substring(1, word.length).toLowerCase();
    let newWord = "";

    if (`${parseInt(first)}` !== "NaN") {
      newWord = first + rest;
    } else {
      newWord = first.toUpperCase() + rest;
    }

    return answer ? answer + " " + newWord : newWord;
  }, "");

  return answer;
}

console.log(solution(s));
