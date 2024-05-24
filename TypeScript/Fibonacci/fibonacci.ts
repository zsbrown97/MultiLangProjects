function fibonacci(length: number) {
  const result: Array<number> = [1, 1];

  // Base array is the first two digits of the sequence.
  // For loop starts from index 2, adding the previous
  // two values of result, and adding that to the array.
  // This sequence progresses until i is equal to length.
  for (let i = 2; i < length; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }

  return result;
}

console.log(fibonacci(5));