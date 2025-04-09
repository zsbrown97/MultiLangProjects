function plusOne(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1;
            return digits;
        }
        digits[i] = 0;
    }
    digits.unshift(1);
    return digits;
}
var test1 = [1, 2, 3];
var test2 = [4, 3, 2, 1];
var test3 = [9];
console.log(plusOne(test1));
console.log(plusOne(test2));
console.log(plusOne(test3));
