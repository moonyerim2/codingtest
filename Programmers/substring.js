//크기가 작은 부분 문자열

function solution(t, p) {
  var answer = [];
  const pLen = p.length;
  //t문자열 돌면서
  for (let i = 0; i <= t.length; i++) {
    //p 길이만큼 문자열 자르기
    const num = t.substring(i, i + pLen);
    //자른 문자열이 p보다 작거나 같으면
    //num.length === pLen안하면 글자수 다른 것도 들어감
    //312어야 하는데 31이어도 들어감
    if (num.length === pLen && Number(num) <= Number(p)) {
      //배열에 넣어두기
      answer.push(Number(num));
    }
  }
  //배열의 길이 = 작거나 같은 숫자 갯수
  return answer.length;
}
