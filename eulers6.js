function sumSquareDifference(num) {
  let sum1 = 0;
  let sumbuff = 0;
  let sum2 = 0;

  for (let i = 1; i < num + 1; i++) {
    sum1 = sum1 + i * i;
    sumbuff = sumbuff + i;
  }
  sum2 = sumbuff * sumbuff;
  return sum2 - sum1;
}

console.log(sumSquareDifference(100));
