#include <iostream>
using namespace std;

void fibonacci(int length) {
  int size = length;
  int* result = new int[size];

  for (int i = 2; i < length; ++i) {
    result[i] = result[i - 1] + result[i - 2];
  }

  cout << result << endl;
}

// Main() function: Where program execution begins
int main() {
  fibonacci(5);

  return 0;
}
