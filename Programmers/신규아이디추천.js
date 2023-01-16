function solution(new_id) {
  //2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
  // newStr = str.reduce((newStr, word) => {
  //   //알파벳인지 아닌지...
  //   if (!isNaN(word) || word === "-" || word === "_" || word === ".") {
  //   }
  // }, '');
  //비효율적인거 같아 포기

  //replace + 정규표현식 = replaceAll
  //str.padEnd(3, 'a') => str의 길이가 3이 될 때까지 a붙여줌 / str길이가 3보다 길다면 무시함
  const id = new_id
    .toLowerCase()
    //못쓰는 기호제거
    .replace(/[^\w\d-_.]/g, "")
    //점 여러개를 한개로
    .replace(/\.{2,}/g, ".")
    // 앞 뒤로 점 제거
    .replace(/^\.|\.$/g, "")
    //빈문자열이면 a 붙이기
    .padEnd(1, "a")
    //15자리까지 자르기
    .slice(0, 15)
    //자르고 나서 마지막이 점이면 또 제거
    .replace(/^\.|\.$/g, "");
    //2자 이하면 마지막 문자를 3자가 될 때까지 반복 채우기
  return id.padEnd(3, id[id.length - 1]);
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
console.log(solution("...!@BaT#*..y.abcdefghijklm") === "bat.y.abcdefghi");
