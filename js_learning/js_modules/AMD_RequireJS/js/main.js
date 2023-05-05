(function () {
  requirejs.config({
    baseUrl: "js/",
    paths: {
      a: "./module/a",
      b: "./module/b",
      c: "./module/c",
      //非自定义
      jquery: "./lib/jquery.min",
    },
  });
  requirejs(["a", "b", "c", "jquery"], function (a, b, c, $) {
    a.showMsg();
    b.showMsg();
    $("body").css("background-color", "blue");
  });
})();
