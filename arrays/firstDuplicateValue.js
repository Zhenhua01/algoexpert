"use strict";

// TC = O(n) SC = O(n)

function firstDuplicateValue(array) {
  let freq = {};

  for (let val of array) {
    if (freq[val]) {
      return val;
    } else {
      freq[val] = 1;
    }
  }

  return -1;
}


// TC = O(n) SC = O(n)

function firstDuplicateValue(array) {
  let unique = new Set();

  for (let val of array) {
    if (unique.has(val)) {
      return val;
    } else {
      unique.add(val);
    }
  }

  return -1;
}