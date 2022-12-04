"use strict";

// square value and push into new array
// sort output array in case of negative integers
// TC = O(n*logn) SC = O(n)

function sortedSquaredArray(array) {
  let output = [];

  for (let val of array) {
    output.push(val ** 2);
  }

  return output.sort((a, b) => (a - b));
}


// use two pointers at both ends of array
// initialize an output array of same size
// insert bigger squared value and move pointers in
// TC = O(n) SC = O(n)

function sortedSquaredArray(array) {
  let output = new Array(array.length).fill(0);
  let outputIdx = array.length - 1;
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    if (array[left] ** 2 > array[right] ** 2) {
      output[outputIdx] = array[left] ** 2;
      left++;
    } else {
      output[outputIdx] = array[right] ** 2;
      right--;
    }
    outputIdx--;
  }

  return output;
}


// use two pointers at both ends of array
// initialize an output array of same size
// insert bigger squared value and move pointers in
// TC = O(n) SC = O(n)

function sortedSquaredArray(array) {
  let output = new Array(array.length).fill(0);
  let left = 0;
  let right = array.length - 1;

  for (let idx = right; idx >= 0; idx--) {
    let leftVal = array[left] ** 2;
    let rightVal = array[right] ** 2;

    if (leftVal > rightVal) {
      output[idx] = leftVal;
      left++;
    } else {
      output[idx] = rightVal;
      right--;
    }
  }

  return output;
}