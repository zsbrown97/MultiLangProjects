package Java.ContainerArea;

public class containerArea {
  public static int maxArea(int[] height) {
    int max = 0;
    int left = 0;
    int right = height.length - 1;

    while (left < right) {
      max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
      if (height[left] < height[right]) {
        left++;
      } else {
        right--;
      }
    }
    return max;
  }
  public static void main(String[] args) {
    int[] case1 = {1, 8, 6, 2, 5, 4, 8, 3, 7};
    int[] case2 = {1, 1};
    System.out.println(maxArea(case1));
    System.out.println(maxArea(case2));
  }
}
