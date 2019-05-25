function RansomNote(string, magazine) {
  let createNote = true;
  // for each word in string, is that word also a word in the magazine?
  // turn both into arrays
  let magazineArray = magazine.split(" ")
  let stringArray = string.split(" ")

  for (let i = 0; i < stringArray.length; i++) {
    if (!(magazineArray.includes(stringArray[i]))) {
      createNote = false
    } else {
      wordIndex = magazineArray.indexOf(stringArray[i])
      magazineArray.splice(wordIndex, 1)
    }
  }
  return (createNote ? true : false)
}
