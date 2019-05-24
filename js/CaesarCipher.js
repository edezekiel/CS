const CaesarCipher = (string, number) => {
  // create hash table and reverse lookup table
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const input = string.toLowerCase();
  let output = "";

  for (let i = 0; i < input.length; i++) {
    const letter = input[i];

    if (alphabet.indexOf(letter) === -1) {
      output += letter;
      continue;
    }

    let index = alphabet.indexOf(letter) + number % 26;
    if (index > 25) index -= 26;
    if (index < 0) index += 26;

    output +=
      string[i] === string[i].toUpperCase()
      ? alphabet[index].toUpperCase()
      : alphabet[index];
  }

  return output;
};

//   let cipher = {}
//   let reverseCipher = {}
//
//   for (let i = 0; i < alphabet.length; i++) {
//     cipher[alphabet[i]] = i
//     reverseCipher[i] = alphabet[i]
//   }
//
//   // iterate over phrase and encrypt
//   let encryptedPhrase = []
//
//   for (character of phrase) {
//     if (cipher.hasOwnProperty(character.toLowerCase())) {
//       let index = cipher[character.toLowerCase()]
//       if (num < 0) {
//         debugger
//         encryptedPhrase.push(reverseCipher[Math.abs((num - index) % 26)])
//       }
//       else if ((index + num) < 25) {
//         encryptedPhrase.push(reverseCipher[index + num])
//       }
//       else {
//         console.log(reverseCipher[(index + num) % 26])
//         encryptedPhrase.push(reverseCipher[(index + num) % 26])
//       }
//     } else {
//       encryptedPhrase.push(character)
//     }
//   }
//   return encryptedPhrase.join("")
// }
