// 匿名函数自调用
(function (window) {
  var name = "小明";
  var age = 18;
  function foo() {
    console.log(name + "今年" + age + "岁了");
  }
  window.module_test = { foo };
})(window);
// (function () { ... })(window);
// // 等价于
// (function (window) { ... });
