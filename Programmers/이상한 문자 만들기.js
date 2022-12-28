function solution(s) {
  //입력받은 문자열을 띄어쓰기 단위로 나누고
  let str = s.split(" ");
  let wArr = "";
  let w = "";

  //띄어쓰기 단위로 나눈 배열을 돌면서
  for (let i = 0; i < str.length; i++) {
    const word = str[i];
    //단어를 또 글자하나하나로 나누기
    wArr = word.split("");
    //글자 배열을 돌면서
    for (let j = 0; j < word.length; j++) {
      //짝수면
      if (j % 2 === 0) {
        //대문자로
        w = word.charAt(j).toUpperCase();
        //대문자로 바꾼 w를 위치 맞춰 넣어주기
        wArr.splice(j, 1, w);
        //홀수면
      } else {
        //소문자로
        w = word.charAt(j).toLowerCase();
        //소문자로 바꾼 w를 위치 맞춰 넣어주기
        wArr.splice(j, 1, w);
      }
    }
    //단어 합치기
    str[i] = wArr.join("");
  }
  //전체 문자열 합치기
  return str.join(" ");
}
