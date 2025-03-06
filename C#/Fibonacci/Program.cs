static List<int> Fibonacci(int n) {
  List<int> result = [1, 1];

  for (int i = 2; i < n; i++) {
    result.Add(result[i - 1] + result[i - 2]);
  }

  foreach (int i in result) {
    Console.WriteLine(i);
  }

  return result;
}

Console.WriteLine(Fibonacci(8));
