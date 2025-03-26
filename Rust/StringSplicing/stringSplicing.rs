fn spliceStrings(word1: &str, word2: &str) -> String {
  let mut result = "".to_string();
  let mergedLength = std::cmp::max(word1.len(), word2.len());

  for i in 0..mergedLength {
    if let Some(c) = word1.chars().nth(i) { result.push(c) };
    if let Some(c) = word2.chars().nth(i) { result.push(c) };
  }

  return result;
}

fn main() {
  println!("{}", spliceStrings("Basket", "Ball"));
}