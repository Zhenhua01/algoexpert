"use strict";

// make an array keeping track of count and letters
// push to array when count is 9 or letter changes
// join array of into a string
// TC = O(n) SC = O(n)

function runLengthEncoding(string) {
  let encoding = [];
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    count++;

    if (count === 9 || string[i] !== string[i + 1]) {
      encoding.push(count);
      encoding.push(string[i]);
      count = 0;
    }
  }

  return encoding.join("");
}