"use strict";

// sort array
// start with first number
// check combos of numbers after first
// use multiple pointers
// push to output when sums are found
// TC = O(n^2) SC = O(n)

function threeNumberSum(array, targetSum) {
  array.sort((a, b) => (a - b));
  let output = [];

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    let leftIdx = i + 1;
    let rightIdx = array.length - 1;

    if (num > targetSum) break;

    while (leftIdx < rightIdx) {
      let leftNum = array[leftIdx];
      let rightNum = array[rightIdx];
      let currSum = num + leftNum + rightNum;

      if (currSum < targetSum) {
        leftIdx++;
      } else if (currSum > targetSum) {
        rightIdx--;
      } else if (currSum === targetSum) {
        output.push([num, leftNum, rightNum]);
        leftIdx++;
        rightIdx--;
      }
    }
  }

  return output;
}