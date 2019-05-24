const CaesarCipher = (phrase) => {
  // create hash table and reverse lookup table
  alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  let cipher = {}
  let reverseCipher = {}

  for (let i = 0; i < alphabet.length; i++) {
    cipher[alphabet[i]] = i
    reverseCipher[i] = alphabet[i]
  }

  // iterate over phrase and encrypt
  let encryptedPhrase = []

  for (character of phrase) {
    if (cipher.hasOwnProperty(character.toLowerCase())) {
      let index = cipher[character.toLowerCase()]
      if (index < 26) {
        encryptedPhrase.push(reverseCipher[index + 1])
      } else if (index === 26) {
        encryptedPhrase.push(reverseCipher[0])
      }
    } else {
      encryptedPhrase.push(character)
    }
    // let encryptedIndex = index + 1
  }
  console.log(encryptedPhrase.join(""))
}
