var umActually = function (phrase) {
    var loweredPhrase = phrase.toLowerCase();
    var finalPhrase = '';
    for (var i = 0; i < loweredPhrase.length; i++) {
        // Passes spaces and symbols straight to the final string
        if (loweredPhrase[i].match(/[^A-Za-z0-9]/g)) {
            finalPhrase += loweredPhrase[i];
        }
        else {
            // Capitalizes every third letter
            if (i % 3 == 0) {
                finalPhrase += loweredPhrase[i].toUpperCase();
            }
            else {
                finalPhrase += loweredPhrase[i];
            }
        }
    }
    console.log(finalPhrase);
    return finalPhrase;
};
umActually('Inertia is a property of matter');
