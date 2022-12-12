"use strict";

// TC = O(n) SC = O(n)

function caesarCipherEncryptor(string, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  if (key > 25) key = key % 26;
  let newStr = "";

  for (let char of string) {
    let newIdx = alphabet.indexOf(char) + key;
    if (newIdx > 25) newIdx -= 26;
    newStr += alphabet[newIdx];
  }

  return newStr;
}


// TC = O(n) SC = O(n)

function caesarCipherEncryptor(string, key) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  newKey = key % 26;

  let newLetters = [];

  for (let char of string) {
    let newIdx = alphabet.indexOf(char) + newKey;

    newLetters.push(alphabet[newIdx % 26]);
  }

  return newLetters.join("");
}