#include <iostream>

// This is another interpretation I did separate from the TypeScript one I 
// originally placed in this directory. This instance uses recursion, and 
// accepts input from the user in the console.

int fibonacci(int n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

int main() {
  int n;
  std::cout << "Enter the number of Fibonacci numbers you would like to see: ";
  std::cin >> n;

  std::cout << "Fibonacci Sequence:\n";
  for (int i = 1; i < n + 1; ++i) {
    std::cout << fibonacci(i) << " ";
  }

  return 0;
}

