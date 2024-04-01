cost = int(input("How much was your meal? - $"))
tip = int(input("What percentage would you like to tip? - "))

def tipCalc(x,y):
    tipPercent = y / 100

    tipAmount = x * tipPercent

    totalBill = x + tipAmount

    print("Cost of meal: " + "${:,.2f}".format(x) + ".\n")
    print("Tip percentage: " + str(y) + "%.\n")
    print("Tip amount: " + "${:,.2f}".format(tipAmount) + ".\n")
    print("Total cost: " + "${:,.2f}".format(totalBill) + ".\n")

tipCalc(cost, tip)
