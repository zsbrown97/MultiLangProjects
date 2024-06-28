const umActually = (phrase: string): string => {
  const loweredPhrase: string = phrase.toLowerCase();


  let finalPhrase: string = '';

  for (let i = 0; i < loweredPhrase.length; i++) {
    if (loweredPhrase[i].match(/[^A-Za-z0-9]/g)) {
      finalPhrase += loweredPhrase[i];
    } else {
      if (i % 2 == 0) {
        finalPhrase += loweredPhrase[i].toUpperCase()
      } else {
        finalPhrase += loweredPhrase[i];
      }
    }
  }

  console.log(finalPhrase);
  return phrase;
}

umActually('Inertia is a property of matter')