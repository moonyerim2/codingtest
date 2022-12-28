function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  //최대 몇 개의 부서니까
  //신청한 금액이 적은 돈끼리 더해야 함
  d.sort((a, b) => a - b);
  //팀 신청금액 배열을 돌면서
  for (let i = 0; i < d.length; i++) {
    //(신청금액들의 합 + 이번 팀의 신청금액)이 예산보다 작으면
    //예산이 아직 있으니까 다음 팀꺼 검토
    //크면 예산없으니까 탈출하고 지금까지 더한 팀 카운트
    if (sum + d[i] <= budget) {
      sum += d[i];

      answer++;
    }
  }
  return answer;
}
