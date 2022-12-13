"use strict";

// TC = O(n*logn) SC = O(1)

function binarySearch(array, target) {
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (array[midIdx] < target) {
      leftIdx++;
    } else if (array[midIdx] > target) {
      rightIdx--;
    } else {
      return midIdx;
    }
  }

  return -1;
}