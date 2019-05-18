function Vowels(string) {
  const vowels = ["a", "e", "i", "o", "u"]
  let vowelsCount = 0
  for (character of string.toLowerCase()) {
    if (vowels.includes(character)) {
      vowelsCount++
    }
  }
  return vowelsCount
}
