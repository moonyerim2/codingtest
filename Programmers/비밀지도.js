function solution(n, arr1, arr2) {
  const bArr1 = arr1.map((el) =>
    Number(el).toString(2).padStart(n, 0).split("")
  );
  const bArr2 = arr2.map((el) =>
    Number(el).toString(2).padStart(n, 0).split("")
  );

  return bArr1.map((row, i) => {
    return row
      .map((digit, j) => {
        //둘 다 0이면 0 => &&를 드모르간의 법칙
        return Number(digit) || Number(bArr2[i][j]) ? "#" : " ";
      })
      .join("");
  });
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
