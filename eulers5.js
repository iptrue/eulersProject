function smallestMultiple(num) {
  for (let i = num; ; i++) {
    for (let j = 1; j < num + 2; j++) {
      if (i % j === 0) {
      } else {
        break;
      }
      if (j == num) {
        return i;
      }
    }
  }
}

console.log(smallestMultiple(20));
