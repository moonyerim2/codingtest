function solution(people, limit) {
  people.sort((a, b) => b - a);

  let first = 0
  let last = people.length - 1;
  let count = 0;

  while (first < last) {
    const sum = people[first] + people[last];

    if (sum > limit) {
      //100을 넘으면 큰 수 하나만 나가기
      first += 1;
    } else {
      //100을 안넘으면 큰 수, 작은 수 둘 다 나가기
      first += 1;
      last -= 1;
    }
    //나갔으니까 카운트 업
    count += 1;
  };

  if (first === last) count += 1;

  return count;
}

console.log(solution([70, 80, 50], 100))
console.log(solution([70, 80, 50, 50], 100))