function productExceptSelf(nums: number[]): number[] {
  let answer: number[] = [];

  for (let i = 0; i < nums.length; i++) {
      let newArr: number[] = nums.filter(n => n != nums[i]);
      let prod: number = 1;
      for (let j = 0; j < newArr.length; j++) {
          prod = prod * newArr[j]
      }
      answer.push(prod)
  }

  return answer;
};