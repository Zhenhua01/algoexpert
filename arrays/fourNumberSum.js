"use strict";

// sort array
// start with first and second number
// check combos of numbers after first two
// use multiple pointers
// push to output when sums are found
// TC = O(n^3) SC = O(n)

function fourNumberSum(array, targetSum) {
  array.sort((a, b) => (a - b));
  let output = [];

  for (let i = 0; i < array.length - 3; i++) {
    for (let j = i + 1; j < array.length - 2; j++) {
      const num1 = array[i];
      const num2 = array[j];

      let leftIdx = j + 1;
      let rightIdx = array.length - 1;

      if (num1 > targetSum) break;

      while (leftIdx < rightIdx) {
        let leftNum = array[leftIdx];
        let rightNum = array[rightIdx];
        let currSum = num1 + num2 + leftNum + rightNum;

        if (currSum < targetSum) {
          leftIdx++;
        } else if (currSum > targetSum) {
          rightIdx--;
        } else if (currSum === targetSum) {
          output.push([num1, num2, leftNum, rightNum]);
          leftIdx++;
          rightIdx--;
        }
      }
    }
  }

  return output;
}