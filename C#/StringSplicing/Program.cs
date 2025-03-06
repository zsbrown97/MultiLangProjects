static string mergeAlternately(string word1, string word2)
{
   string result = "";
   int mergedLength = Math.Max(word1.Length, word2.Length);

   for (int i = 0; i < mergedLength; i++) {
     if (i < word1.Length) result += word1[i];
     if (i < word2.Length) result += word2[i];
   }
   
  return result;

}

Console.WriteLine(mergeAlternately("Basket", "Ball"));
