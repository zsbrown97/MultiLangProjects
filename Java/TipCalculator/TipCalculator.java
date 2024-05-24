import java.util.Scanner;

public class TipCalculator {

	static void tipCalc(float x, float y) {
		float tipPercent = y / 100;

		float tipAmount = x * tipPercent;

		float totalBill = x + tipAmount;

		System.out.println("Cost of meal: " + x);
		System.out.println("Tip percentage: " + y + "%");
		System.out.println("Tip amount: " + tipAmount);
		System.out.println("Total cost: " + totalBill);
	}

	public static void main(String[] args) {
		Scanner obj = new Scanner(System.in);

		System.out.println("How much was your meal?");
		int cost = obj.nextInt();

		System.out.println("What percentage would you like to tip?");
		int tip = obj.nextInt();

		tipCalc(cost, tip);

	}
}