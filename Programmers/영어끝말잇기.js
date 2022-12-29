function solution(n, words) {
  //끝말잇기가 틀려도 아웃
  //이미 나온 단어를 말해도 아웃

  var answer = [];
  const answerWords = [];
  const turn = Array.from({ length: n }, () => 0);
  let prevWord = "";

  for (i in words) {
    const word = words[i];
    const lastCharacter = prevWord[prevWord.length - 1];
    const index = i % n;
    //끝말잇기가 틀렸다 -> out
    if (prevWord && lastCharacter !== word[0]) {
      //번호는 1부터 시작
      return [index + 1, turn[index] + 1];
    }
    //끝말잇기 틀리지 않았다
    //중복확인
    else if (answerWords.indexOf(word) === -1) {
      //다 통과되면 단어 저장
      answerWords.push(word);
      prevWord = word;
    } else {
      //중복이 있을 경우 아웃
      return [index + 1, turn[index] + 1];
    }

    turn[index]++;
  }

  return [0, 0];
}
