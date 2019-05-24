const CaesarCipher = (phrase) => {
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let cipher = {}
  for (let i = 0; i < alphabet.length; i++) {
    cipher[alphabet[i]] = i
  }

  for (word of phrase.split(" ")) {
    console.log(word)
  }
}
