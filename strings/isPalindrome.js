"use strict";

// start with left and right index pointers
// compare each letter moving inwards at same time
// TC = O(n) SC = O(1)

function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left <= right) {
    if (string[left] === string[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}