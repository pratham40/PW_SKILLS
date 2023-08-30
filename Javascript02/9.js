let count = 0

function uniqueCharactersCheck(character) {
    for (let i = 0; i < character.length; i++) {
        for (let j = i + 1; j < character.length; j++) {
            if (character[i] === character[j]) {
                count += 1
            }
        }
    }
    if (count == 0) {
        console.log("The input string contains unique characters");
    }
    else {
        console.log("The input string contains duplicates");
    }

}
uniqueCharactersCheck("mithun")

uniqueCharactersCheck("anurag")