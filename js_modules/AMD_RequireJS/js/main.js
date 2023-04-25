(function () {
  requirejs.config({
    paths: {
      a: "./a",
      b: "./b",
    },
  });
  requirejs(["a", "b"], function (a, b) {
    a.showMsg();
    b.showMsg();
  });
})();
