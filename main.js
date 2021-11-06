let strings = require("./strings");
let alphabet = require("./alphabet");

function caesarEncrypt(word, shift) {
  let newWord = "";
  let shiftedAlphabet = alphabet.slice();
  for (let i = 1; i <= shift; i++) {
    shiftedAlphabet.push(shiftedAlphabet.shift());
  }
  for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") {
      newWord += " ";
    } else {
      let normalIndex = alphabet.indexOf(word[i]);
      newWord += shiftedAlphabet[normalIndex];
    }
  }
  return newWord;
}

strings.forEach((string) => console.log(caesarEncrypt(string, 3)));
