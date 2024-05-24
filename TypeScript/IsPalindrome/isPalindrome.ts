const isPalindrome = (phrase: string): boolean => {
  const original = phrase.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  const reversed = original.split('').reverse().join('');

  return original == reversed;
}

console.log(isPalindrome('tacocat'))
console.log(isPalindrome('cattaco'))
console.log(isPalindrome('A man, a plan, a canal – Panama!'))
