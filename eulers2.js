let EvenFibonacciSum = function (limit) {
  let sum = 0;
  let prevFib = [1, 1];

  for (;;) {
    let nextFib = prevFib[0] + prevFib[1];
    if (nextFib > limit) {
      return sum;
    }
    if (nextFib % 2 == 0) {
      sum = sum + nextFib;
    }
    prevFib = [prevFib[1], nextFib];
  }
};

EvenFibonacciSum(4000000);
