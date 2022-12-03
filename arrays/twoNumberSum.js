"use strict";

// using two for loops
// TC = O(n^2) SC = O(1)

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) return [array[i], array[j]];
    }
  }

  return [];
}


// using hash table
// TC = O(n) SC = O(n)

function twoNumberSum(array, targetSum) {
  let numsMap = {};

  for (let i = 0; i < array.length; i++) {
    let goal = targetSum - array[i];

    if (goal in numsMap) {
      return [array[i], goal]
    } else {
      numsMap[array[i]] = i;
    }
  }

  return [];
}