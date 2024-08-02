#include <iostream>
#include <vector>

int maxArea(std::vector<int> height) {
  int maximum = 0;
  int left = 0;
  int right = height.size() - 1;

  while (left < right) {
    maximum = std::max(maximum, (right - left) * std::min(height[left], height[right]));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maximum;
}

int main() {
  std::vector<int> case1 = {1, 8, 6, 2, 5, 4, 8, 3, 7};
  std::vector<int> case2 = {1, 1};

  std::cout << maxArea(case1) << std::endl;
  std::cout << maxArea(case2) << std::endl;
  return 0;
}
