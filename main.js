let strings = require("./strings");
let alphabet = require("./alphabet");

function caesarEncrypt(word, shift) {
  let shiftedAlphabet = alphabet.slice();
  for (let i = 1; i <= shift; i++) {
    shiftedAlphabet.push(shiftedAlphabet.shift());
  }

  return encrypt(shiftedAlphabet, word);
}

function keywordEncrypt(word, keyword) {
  let newWord = "";
  let shiftedAlphabet = alphabet.slice();
  for (let i = 0; i < keyword.length; i++) {
    shiftedAlphabet.splice(i, 0, keyword[i]);
  }
  for (let i = keyword.length; i < shiftedAlphabet.length; i++) {
    if (keyword.includes(shiftedAlphabet[i])) {
      shiftedAlphabet[i] = null;
    }
  }
  shiftedAlphabet = shiftedAlphabet.filter((value) => value !== null);

  return encrypt(shiftedAlphabet, word);
}

function encrypt(shiftedAlphabet, word) {
  let newWord = "";
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
strings.forEach((string) => console.log(keywordEncrypt(string, "METHODS")));

// console.log(caesarEncrypt("DEFEND THE EAST WALL OF THE CASTLE", 1));
// console.log(keywordEncrypt("UNIVERSITY", "COLEG"));
