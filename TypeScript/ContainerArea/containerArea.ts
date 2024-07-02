// My original solution
function maxArea(height: number[]): number {
  let maximum: number = 0;

  for (let i = 0; i < height.length; i++) {
    let width: number = 1;

    for (let j = i + 1; j < height.length; j++) {
      let maxHeight: number = height[j]
      if (height[i] < maxHeight) maxHeight = height[i];

      let area: number = maxHeight * width;
      if (area > maximum) maximum = area;

      width += 1;
    }
  }

  return maximum;
}

// Two-pointer solution
function maxAreaTwoPointer(height: number[]): number {
  let max: number = 0;
    let left: number = 0;
    let right = height.length - 1;

    while (left < right) {
        max = Math.max(max, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max
}

let case1: number[] = [1,8,6,2,5,4,8,3,7];
let case2: number[] = [1,1];

console.log(maxArea(case1)); // Expecting 49
console.log(maxArea(case2)); // Expecting 1

console.log(maxAreaTwoPointer(case1));
console.log(maxAreaTwoPointer(case2));