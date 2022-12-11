"use strict";

// get frequency count of chars in both strings
// compare if there are enough chars from characters
// to form the chars of documents
// TC = O(n) SC = O(n)

function generateDocument(characters, document) {
  let charFreq = {};
  let docuFreq = {};

  for (let char of characters) {
    if (char === "") {
      charFreq['space'] = (charFreq['space'] + 1) || 1;
    } else {
      charFreq[char] = (charFreq[char] + 1) || 1;
    }
  }

  for (let char of document) {
    if (char === "") {
      docuFreq['space'] = (docuFreq['space'] + 1) || 1;
    } else {
      docuFreq[char] = (docuFreq[char] + 1) || 1;
    }
  }

  for (let key in docuFreq) {
    if (docuFreq[key] > charFreq[key] || !charFreq[key]) return false;
  }

  return true;
}


// TC = O(n) SC = O(n)

function generateDocument(characters, document) {
  let charFreq = {};

  for (let char of characters) {
    if (char === "") {
      charFreq['space'] = (charFreq['space'] + 1) || 1;
    } else {
      charFreq[char] = (charFreq[char] + 1) || 1;
    }
  }

  for (let char of document) {
    if (!charFreq[char] || charFreq[char] === 0) return false;

    charFreq[char]--;
  }

  return true;
}