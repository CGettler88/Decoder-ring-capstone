// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
  const standardAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  //test to see if any value in the newArray repeats
  function repeatedValues(newArray) {
    return newArray.every((character) => {
      return newArray.filter((index) => character === index).length > 1;
    });
  }

  function arrayFromString(string) {
    return Array.from(string);
  }

 
  function encodeMessage(inputArray, newArray) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character;
      } else {
        let Letter = standardAlphabet.find((letter) => letter === character);
        return newArray[standardAlphabet.indexOf(Letter)];
      }
    }).join("")
  }
//decode message
  function decodeMessage(inputArray, newArray) {
    return inputArray.map((character) => {
      if (character === " ") {
        return character;
      } else {
        let desiredCharacter = newArray.find((indexCharacter) => indexCharacter === character);
        return standardAlphabet[newArray.indexOf(desiredCharacter)]
      }
    }).join("")
  }
  function substitution(input, alphabet, encode = true) {
   if (!alphabet || alphabet.length !== 26||!input) {
      return false;
    }

    const inputArray = arrayFromString(input.toLowerCase());
    const newArray = arrayFromString(alphabet.toLowerCase());

    if (repeatedValues(newArray)) {
      return false;
    }
    if (encode) {
      return encodeMessage(inputArray, newArray);
    }
    if (!encode) {
      return decodeMessage(inputArray, newArray);
    }
  }
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
