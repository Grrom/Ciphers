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

function giovanniEncrypt(word, keyLetter, keyword) {
  let keyLetterIndex = alphabet.indexOf(keyLetter);
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

  let rightSideLength = alphabet.length - (keyLetterIndex + keyword.length);
  let rightSide = shiftedAlphabet.slice(
    keyword.length,
    keyword.length + rightSideLength
  );

  let leftSide = shiftedAlphabet.slice(
    shiftedAlphabet.indexOf(rightSide[rightSide.length - 1]) + 1,
    shiftedAlphabet.length
  );

  shiftedAlphabet = leftSide.concat(keyword.split("")).concat(rightSide);

  return encrypt(shiftedAlphabet, word);
}

function transpositionEncrypt(word) {
  let left = "";
  let right = "";
  word = word.replace(/ /g, "");
  for (let i = 0; i < word.length; i++) {
    if (word[i] == " ") continue;
    if (i % 2 == 0) {
      left += word[i];
    } else {
      right += word[i];
    }
  }
  return left + right;
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

console.log("\nCaesar ==============");
strings.forEach((string) => console.log(caesarEncrypt(string, 3)));
console.log("\nKeyword ==============");
strings.forEach((string) => console.log(keywordEncrypt(string, "METHODS")));
console.log("\nGiovanni ==============");
strings.forEach((string) =>
  console.log(giovanniEncrypt(string, "C", "METHODS"))
);
console.log("\nRail fence referrence ==============");
strings.forEach((string) => console.log(transpositionEncrypt(string)));
