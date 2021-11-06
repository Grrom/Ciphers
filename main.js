let strings = [
  "ASSURANCE",
  "CYBERSECURITY",
  "INFINITY",
  "SAMPLING",
  "MORNING",
  "EXAMINATION",
  "MASTER",
  "SYSTEM",
  "VISUAL STUDIO",
  "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
];

let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

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

strings.forEach((string) => console.log(caesarDecrypt(string, 3)));
