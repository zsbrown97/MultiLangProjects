function isPrime(num) {
    if (num == 2) {
        return true;
    }
    else if (num < 2) {
        return false;
    }
    else {
        for (var i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
}
function onlyPrimes(nums) {
    var primes = [];
    nums.forEach(function (num) {
        if (isPrime(num))
            primes.push(num);
    });
    return primes;
}
var sample = [6, 29, 28, 33, 11, 100, 101, 43, 89];
console.log(isPrime(7));
console.log(onlyPrimes(sample));
