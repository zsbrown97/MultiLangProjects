const prompt = require('prompt-sync')({sigint: true});

// Formats to US Dollar

let USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

let cost = prompt('How much was your meal? - $');
let tip = prompt('What percentage would you like to tip? - ')

cost = Number(cost);
tip = Number(tip);

function tipCalc(x, y) {
  let tipPercent = y / 100;

  let tipAmount = x * tipPercent;

  let totalBill = x + tipAmount;

  tipAmount = USDollar.format(tipAmount)
  totalBill = USDollar.format(totalBill)

  console.log("Cost of meal: " + x + "\n");
  console.log("Tip percentage: " + y + "%\n");
  console.log("Tip amount: " + tipAmount + "\n");
  console.log("Total cost: " + totalBill + "\n");
}

tipCalc(cost, tip);
