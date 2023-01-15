function reverseString(str) {
  return str.split("").reverse().join("");
}

function LargestPalindromeProduct(limit) {
  let max = 0;
  for (let i = limit / 10; i < limit; i++) {
    for (let j = limit / 10; j < limit; j++) {
      num = i * j;
      if (reverseString(num.toString()) == num) {
        if (num > max) max = num;
      }
    }
  }
  return max;
}

console.log(LargestPalindromeProduct(1000));
