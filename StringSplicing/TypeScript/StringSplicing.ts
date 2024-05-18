const word1: string = "Basket";
const word2: string = "Ball";

let result: string = '';
let difference: number = 0;

if (word1.length > word2.length) {
  difference = word1.length;
} else if (word2.length > word1.length) {
  difference = word2.length;
} else if (word1.length == word1.length) {
  difference = word1.length;
}

for (let i = 0; i < difference; i++) {
    word1[i] != undefined ? result += word1[i] : word2[i]
    word2[i] != undefined ? result += word2[i] : word1[i]
}

console.log(result);
