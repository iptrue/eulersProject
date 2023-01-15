let sumOfMultiples3or5 = function (nums, limit) {
  console.log(nums);
  console.log(limit);

  let mySet = new Set();
  for (let j = 0; j < nums.length; j++)
    for (let i = 1; i < limit; i++) {
      x = i * nums[j];
      if (x >= limit) {
        break;
      }
      mySet.add(i * nums[j]);
    }

  console.log(mySet);

  console.log(
    [...mySet].reduce((accumulator, currentValue) => accumulator + currentValue)
  );
};

sumOfMultiples3or5([3, 5], 1000);
