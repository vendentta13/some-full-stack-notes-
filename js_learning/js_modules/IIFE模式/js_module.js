// 匿名函数自调用
(function () {
  var name = "小明";
  var age = 18;
  function foo() {
    console.log(name + "今年" + age + "岁了");
  }
  window.module_test = { foo };
})();
