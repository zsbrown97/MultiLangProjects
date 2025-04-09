function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1
      return digits
    }
    digits[i] = 0
  }  
  digits.unshift(1)
  return digits;
}

const test1: number[] = [1,2,3]
const test2: number[] = [4,3,2,1]
const test3: number[] = [9]
console.log(plusOne(test1))
console.log(plusOne(test2))
console.log(plusOne(test3))