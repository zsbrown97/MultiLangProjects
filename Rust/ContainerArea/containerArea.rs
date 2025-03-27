fn maxArea(height: Vec<i32>) -> i32 {
  let mut ans = 0;
  let mut left = 0;
  let mut right = height.len() - 1;

  while left < right {
      let x = (right - left) as i32;
      let mut y = 0;

      if height[left] < height[right] {
          y = height[left];
          left += 1;
      } else {
          y = height[right];
          right -= 1;
      }
      ans = ans.max(x*y);
  }
  ans
}

// Original solution
// fn maxArea(height: Vec<i32>) -> i32 {
//   let mut max: i32 = 0;

//   for i in 0..height.len() {
//     let mut width: i32 = 1;

//     for j in (i + 1)..height.len() {
//       let mut maxHeight: i32 = height[j];
//       if height[i] < maxHeight {
//         maxHeight = height[i];
//       }

//       let area: i32 = maxHeight * width;
//       if area > max {
//         max = area;
//       }

//       width += 1;
//     }
//   }
//   return max;
// }

fn main() {
  let case1: Vec<i32> = vec![1,8,6,2,5,4,8,3,7];
  let case2: Vec<i32> = vec![1,1];

  println!("{}", maxArea(case1));
  println!("{}", maxArea(case2));
}


