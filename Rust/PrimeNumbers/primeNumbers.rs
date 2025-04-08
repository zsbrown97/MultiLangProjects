fn isPrime(num: i32) -> bool {
  if num == 2 { 
    return true; 
  } else if num < 2 {
    return false;
  } else {
    for i in 2..num {
      if num % i == 0 {
        return false;
      }
    }
    return true;
  }

}

// fn onlyPrimes(nums: Vec<i32>) -> Vec<i32> {
//   let mut primes: Vec<i32> = vec![];

//   nums.iter().map(|x| primes.push(x));

//   return primes;
// }

fn main() {
  let sample: Vec<i32> = vec![6, 29, 28, 33, 11, 100, 101, 43, 89];

  println!("{}", isPrime(7));
  // println!("{}", onlyPrimes(sample));
}