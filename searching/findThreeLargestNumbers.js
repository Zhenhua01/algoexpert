"use strict";

// TC = O(n) SC = O(1)

function findThreeLargestNumbers(array) {
  let int1 = -Infinity;
  let int2 = -Infinity;
  let int3 = -Infinity;

  for (let val of array) {
    if (val > int3) {
      int1 = int2;
      int2 = int3;
      int3 = val;
    } else if (val > int2) {
      int1 = int2;
      int2 = val;
    } else if (val > int1) {
      int1 = val;
    }
  }

  return [int1, int2, int3];
}