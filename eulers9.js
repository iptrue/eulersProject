function pythagoreanTriplet(n) {
  for (var a = 1; a < n - 1; a++) {
    for (var b = a; b < n; b++) {
      c = Math.sqrt(a * a + b * b);
      if (c % 1 === 0) {
        if (a + b + c === 1000) {
          return a * b * c;
        }
      }
    }
  }
}
console.log(pythagoreanTriplet(1000));
