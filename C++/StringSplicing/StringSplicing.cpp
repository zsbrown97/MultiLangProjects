#include <iostream>

std::string stringSplice(std::string word1, std::string word2) {
  std::string result;
  int mergedLength = (word1.length() > word2.length()) ? word1.length() : word2.length();

  for (int i = 0; i < mergedLength; i++) {
    if (i < word1.length()) {
      result += word1[i];
    }
    if (i < word2.length()) {
      result += word2[i];
    }
  }
  return result;
}

int main() {
  std::cout << stringSplice("Original", "Thought") << std::endl;
  return 0;
}
