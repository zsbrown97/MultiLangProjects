cost = int(input("How much was your meal? - $"))
tip = int(input("What percentage would you like to tip? - "))

def tipCalc(x,y):
    tipPercent = y / 100

    tipAmount = x * tipPercent

    totalBill = x + tipAmount

    print("Cost of meal: $" + str(x) + ".\n")
    print("Tip percentage: " + str(y) + "%.\n")
    print("Tip amount: $" + str(tipAmount) + ".\n")
    print("Total cost: $" + str(totalBill) + ".\n")

tipCalc(cost, tip)
