import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        int length = 10;
        ArrayList<Integer> fibonacci = new ArrayList<>(2);
        fibonacci.add(1);
        fibonacci.add(1);

        for (int i = 2; i < length; i++) {
            fibonacci.add(fibonacci.get(i - 1) + fibonacci.get(i - 2));
        }

        System.out.println(fibonacci);
    }
}
