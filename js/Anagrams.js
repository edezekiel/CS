const Anagrams = (first, second) => {
  // count number of characters in first string
  let countOne = 0;
  let countTwo = 0;

  for (character in first) {
    countOne++
  }

  for (character in second) {
    countTwo++
  }

  if (countOne === countTwo) {
    console.log(countOne, countTwo, true)
    return true
  } else {
    console.log(countOne, countTwo, false)
    return false
  }
  // count number of characters in second string
}
