"use strict";

// traversing with index of each array
// TC = O(n) SC = O(1)

function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;

    arrIdx++;
  }

  return seqIdx === sequence.length;
}


// traversing with value of array compare and sequence index
// using for loop
// TC = O(n) SC = O(1)

function isValidSubsequence(array, sequence) {
  let seqIdx = 0;

  for (let val of array) {
    if (seqIdx === sequence.length) return true;
    if (val === sequence[seqIdx]) seqIdx++;
  }

  return seqIdx === sequence.length;
}