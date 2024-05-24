#include <iostream>
using namespace std;

void tipCalc(float x, float y) {
	float tipPercent = y / 100;

	float tipAmount = x * tipPercent;

	float totalBill = x + tipAmount;

	cout << "Cost of meal: $" << x << "\n";
	cout << "Tip percentage: " << y << "%\n";
	cout << "Tip amount: $" << tipAmount << "\n";
	cout << "Total cost: $" << totalBill << "\n";
}

int main() {
	int cost;
	int tip;

	cout << "Type a number: ";
	cin >> cost;
	cout << "Type another number: ";
	cin >> tip;

	tipCalc(cost, tip);

	return 0;
}