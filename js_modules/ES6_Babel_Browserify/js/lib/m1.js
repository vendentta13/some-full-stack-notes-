"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;
//分别暴露
function foo() {
  console.log("foo() module1");
}

var arr = exports.arr = [1, 2, 3, 4, 5];