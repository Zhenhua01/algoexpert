"use strict";

// sort the array
// keep track of a current sum
// compare next coin value to the current sum + 1
// if next coin is greater than sum + 1, return sum + 1
// TC = O(n*logn) SC = O(1);

function nonConstructibleChange(coins) {
  coins.sort((a, b) => (a - b));

  let currSum = 0;

  for (let coin of coins) {
    if (coin > currSum + 1) {
      return currSum + 1;
    } else {
      currSum += coin;
    }
  }

  return currSum + 1;
}