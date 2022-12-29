function solution(sizes) {
  var answer = 0;

  let maxW = 0;
  let maxH = 0;

  return sizes.reduce((result, size) => {
    size.sort((a, b) => b - a);

    const [w, h] = size;

    if (maxW < w) maxW = w;
    if (maxH < h) maxH = h;

    return maxW * maxH;
  }, 0);
}
