function solution(n) {
  var answer = 0;
  let newN = n;

  while (true) {
    newN += 1;
    if (newN.toString(2).split("1").length === n.toString(2).split("1").length)
      return newN;
  }
}
