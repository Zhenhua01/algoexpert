"use strict";

// create frequency counter of letters from string
// check how many times each letter appears in order
// return first index of letter appearing one time
// TC = O(n) SC = O(1) - b/c 26 letters max alphabet space

function firstNonRepeatingCharacter(string) {
  let freq = {};

  for (let char of string) {
    freq[char] = freq[char] + 1 || 1;
  }

  for (let char of string) {
    if (freq[char] === 1) return string.indexOf(char);
  }

  return -1;
}