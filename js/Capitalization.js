function Capitalization(string){
  let splitString = string.split(" ")
  let output = []
  splitString.map((word) => {
    const wordCapitalized = word.charAt(0).toUpperCase() + word.slice(1)
    output.push(wordCapitalized)
  })
  return output.join(" ")
}
