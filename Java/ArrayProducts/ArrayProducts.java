package Java.ArrayProducts;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;

public class ArrayProducts {

  public int productExceptSelf(Integer[] nums) {
    // ArrayList<Integer> answer = new ArrayList<Integer>(Arrays.asList(nums));
    int answer = 5;
    for (int i = 0; i < nums.length; i++) {
      Integer[] newArr = (Integer[]) Arrays.stream(nums).filter(x -> x != Array.get(nums, i)).toArray();
    }
    return answer;

  }

  public static void main(String[] args) {

    System.out.println("Hello, World!");
  }
}
