(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//统一暴露
function fun() {
  console.log("fun() module2");
}

function fun2() {
  console.log("fun2() module2");
}

exports.fun = fun;
exports.fun2 = fun2;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//默认暴露 可以暴露任何类型 暴露什么数据就接受什么数据 默认暴露只能有一个 不然会报错
// export default () => {
//   console.log("default");
// };

exports.default = {
  data_: {
    name: "zhangsan",
    age: 18
  }
};
},{}],4:[function(require,module,exports){
"use strict";

var _m = require("./m1");

var _m2 = require("./m2");

var _m3 = require("./m3");

var _m4 = _interopRequireDefault(_m3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _m.foo)();
console.log(_m.arr);
(0, _m2.fun)();
(0, _m2.fun2)();
console.log(_m4.default.data_);
//使用分别暴露或者统一暴露，要使用解构赋值的方式接收
},{"./m1":1,"./m2":2,"./m3":3}]},{},[4]);
