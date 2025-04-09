function removeDuplicates(nums: number[]): number {
  let size: number = 0 
  for (let i = 0; i < nums.length; i++) {
    while (nums[i] == nums[i+1]) {
      nums.splice(i, 1); 
    }
    size++
  }
  return size;
}

const test1: number[] = [1, 1, 2]
const test2: number[] = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(test1))
console.log(removeDuplicates(test2))
