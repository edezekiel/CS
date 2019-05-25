function RansomNote(string, magazine) {
  let createNote = true;
  console.log(string)

  // for each word in string, is that word also a word in the magazine?

  // turn both into arrays

  let magazineArray = magazine.split(" ")
  let stringArray = string.split(" ")

  for (let i = 0; i < stringArray.length; i++) {
    if (!(magazineArray.includes(stringArray[i]))) {
      createNote = false
    }
  }
  return (createNote ? true : false)
  // return true or false
}
