export function isPrime(num: number): boolean {
  if (num == 2) {
    return true;

  } else if (num < 2) {
    return false;

  } else {
    for (let i = 2; i < num; i++) {
      if  (num % i == 0) {
        return false;

      }
    }
    return true;
  }
}

export function onlyPrimes(nums: number[]): number[] {
  let primes: number[] = [];

  nums.forEach(function(num) {
    if (isPrime(num)) primes.push(num);
  })

  return primes;
}