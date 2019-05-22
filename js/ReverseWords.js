function ReverseWords(string) {
  let reversedArray = []
  let wordsArray = string.split(" ")

  for (word of wordsArray) {
    splitWord = word.split("")
    reversedWord = splitWord.reverse()
    reversedArray.push(reversedWord.join(""))
  }

  let reversedWords = reversedArray.join(" ")
  return reversedWords
}
