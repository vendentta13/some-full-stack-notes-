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