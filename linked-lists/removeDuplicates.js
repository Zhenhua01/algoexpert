"use strict";

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// TC = O(n) SC = O(1)

function removeDuplicatesFromLinkedList(linkedList) {
  let currNode = linkedList;

  while (currNode && currNode.next) {
    if (currNode.value === currNode.next.value) {
      currNode.next = currNode.next.next;
    } else {
      currNode = currNode.next;
    }
  }

  return linkedList;
}