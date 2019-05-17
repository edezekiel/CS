const Anagrams = (first, second) => {
  let countOne = 0;
  let countTwo = 0;

  // count number of characters in first string
  for (character in first) {
    console.log(character, countOne)
    countOne++
  }

  // count number of characters in second string
  for (character in second) {
    countTwo++
  }

  return (countOne === countTwo ? true : false);
}
