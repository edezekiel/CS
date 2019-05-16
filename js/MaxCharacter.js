// solution to Silicon West Max Character problem

const max = string => {
  // create empty object literal
  const characters = {};

  // First loop, over string - character are keys and counters are values
  for (let character of string) {
    characters[character] = characters[character] + 1 || 1;
  }

  // set maxCount and maxCharacter variables
  let maxCount = 0;
  let maxCharacter = null;

  // Second loop, over character object
  for (let character in characters) {
    if (characters[character] > maxCount) {
      maxCount = characters[character];
      maxCharacter = character
    }
  }

  return maxCharacter
}
