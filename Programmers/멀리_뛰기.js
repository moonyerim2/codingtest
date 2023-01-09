function solution(n) {
  var answer = 0;
  const dp = [0, 1, 2];
  let i = 3;

  while (i <= n) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
    i++;
  }

  return dp[n];
}
