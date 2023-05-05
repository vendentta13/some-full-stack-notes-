//如果不写形参的$，那么就会报错，因为$是外部的变量，
//在外部想要使用jquery方法时就会报错
(function (window, $) {
  //现在我在这里修改了$的值，但是外部的$并没有改变
  $ = 123;
  let msg = "module1";
  //闭包,获取了外部的变量msg
  function foo() {
    console.log(msg);
    // $("body").css("background", "red");
    console.log(testLocalVar);
    console.log($);
  }
  //what is the meaning of foo?
  window.moduletest = { foo };
})(window, $, testLocalVar);
//注意：$是一个常量，当它被当作参数传递时，
//它的值就会被复制给形参$，但是$本身的值不会改变。

// 首先前面那个括号里面是一个匿名函数，
//这个匿名函数接收一个参数window，
//然后在这个匿名函数内部定义了一个变量msg，
//然后定义了一个函数foo，
//最后把这个函数暴露给window对象，
//这样外部就可以通过window.module_test.foo()来调用这个函数了。

//后面那个括号就是立即执行函数的参数
//这叫作依赖注入，把外部的变量注入到匿名函数中，
//虽然说window是全局变量，写不写参数都可以，
//但是会污染全局变量，所以最好还是写上。

//不写参数的话，就是这样的：
