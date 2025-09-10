function missingNumber(nums) {
  const sorted = nums.sort((a, b) => a - b);

  if (nums.length === 0) {
    return nums.length;
  } else {
    const missing = []
    for (let i = 0; i <= nums.length; i++) {
      if (!sorted.includes(i) ) {
        missing.push(i)
      }
    }

    return missing
  }
}

console.log(missingNumber([0, 1, 0]));
