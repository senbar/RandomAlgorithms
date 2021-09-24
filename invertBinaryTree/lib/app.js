"use strict";

var _rxjs = require("rxjs");

var _binaryTree = require("./binary-tree");

const app = () => {
  var binaryTree = new _binaryTree.BinaryTree(1);
  binaryTree.right = new _binaryTree.BinaryTree(4);
  console.log("test");
};

document.addEventListener("DOMContentLoaded", app);