function isPrime(n) {
  if (n <= 1) return false;
  if (n == 2) return true;
  for (let i = 2; i * i <= n; ++i) {
    if (n % i == 0) return false;
  }
  return true;
}
function findNthPrime(N) {
  let prime = 2;
  let i = 1;
  while (i < N) {
    do {
      prime++;
    } while (!isPrime(prime));
    i++;
  }
  return prime;
}
console.log(findNthPrime(10001));
