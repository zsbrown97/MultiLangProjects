fn main() {
  println!("{:?}", fibonacci(5));
}

fn fibonacci(length: i32) -> Vec<i32> {
  if length <= 0 {
    return vec![];
  }

  if length == 1 {
    return vec![1];
  }

  let mut result: Vec<i32> = vec![1, 1];

  for n in 2..length as usize {
    result.push(result[n - 1] + result[n - 2]);
  }

  return result;
}