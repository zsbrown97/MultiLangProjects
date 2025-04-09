function mergeAlternately(word1: string, word2: string): string {
  let result: string = '';
  let mergedLength: number = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < mergedLength; i++) {
      word1[i] != undefined ? result += word1[i] : word2[i]
      word2[i] != undefined ? result += word2[i] : word1[i]
  }

  return result;
};

console.log(mergeAlternately('basket', 'ball'));
